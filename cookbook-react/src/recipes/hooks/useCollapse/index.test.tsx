import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useCollapse, { CollapsibleParameters } from '.';

function WrapperComponent({
  defaultIsOpen,
  onChange,
  animateOnCollapseEffect,
  collapseTime
}: CollapsibleParameters) {
  const { handleCollapse, collapsibleRef, collapsed } = useCollapse<HTMLDivElement>({
    defaultIsOpen,
    onChange,
    animateOnCollapseEffect,
    collapseTime
  });

  return (
    <div>
      <span>is collapsed: {collapsed ? 'true' : 'false'}</span>
      <button type="button" onClick={handleCollapse} />
      <div ref={collapsibleRef}>
        <span>collapsible content</span>
      </div>
    </div>
  );
}

test('returns a handler that executes the collapse logic', () => {
  const collapseHandler = jest.fn();
  render(<WrapperComponent onChange={collapseHandler} animateOnCollapseEffect={false} />);
  const collapseButton = screen.getByRole('button');
  userEvent.click(collapseButton);

  expect(collapseHandler).toHaveBeenCalled();
});

test('returns a handler that executes after `collapseTime` when animateOnCollapse is true', () => {
  jest.useFakeTimers();
  const collapseHandler = jest.fn();

  render(<WrapperComponent onChange={collapseHandler} />);

  const collapseButton = screen.getByRole('button');
  userEvent.click(collapseButton);

  jest.runAllTimers();

  expect(collapseHandler).toHaveBeenCalled();
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test('collapses the element when the return handler is called', () => {
  render(<WrapperComponent animateOnCollapseEffect={false} />);

  const collapseButton = screen.getByRole('button');
  userEvent.click(collapseButton);

  const collapsedText = screen.getByText('is collapsed: true');
  expect(collapsedText).toBeVisible();
});

test('sets the correct styles when it uncollapses', () => {
  render(<WrapperComponent animateOnCollapseEffect={false} />);

  const collapseButton = screen.getByRole('button');
  userEvent.click(collapseButton);
  userEvent.click(collapseButton);

  const collapsedText = screen.getByText('is collapsed: false');
  expect(collapsedText).toBeVisible();
});

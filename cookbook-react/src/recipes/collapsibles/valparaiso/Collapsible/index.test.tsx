import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Collapsible from './index';

const collapsibleId = 'collabpsible';

describe('When collapsible starts expanded', () => {
  beforeEach(() => {
    render(
      <Collapsible collapsibleId={collapsibleId} title="A title">
        <div>some content</div>
      </Collapsible>
    );
  });

  it('renders with the content visible by default', () => {
    const button = screen.queryByRole('button', { expanded: false });
    expect(button).toBeNull();
  });

  it('hides the content when the collapse button is pressed', () => {
    const button = screen.getByRole('button', { expanded: true });

    fireEvent.click(button);

    const expanded = screen.queryByRole('button', { expanded: true });
    expect(expanded).toBeNull();
  });

  it('shows the content again when it is collapsed and the button is clicked', () => {
    const button = screen.getByRole('button', { expanded: true });

    fireEvent.click(button);
    fireEvent.click(button);

    const collapsed = screen.queryByRole('button', { expanded: false });
    expect(collapsed).toBeNull();
  });
});

describe('When collapsible starts collapsed', () => {
  beforeEach(() => {
    render(
      <Collapsible collapsibleId={collapsibleId} title="A title" defaultIsClosed>
        <div>some content</div>
      </Collapsible>
    );
  });

  it('renders with the content hidden by default', () => {
    const button = screen.queryByRole('button', { expanded: true });
    expect(button).toBeNull();
  });

  it('shows the content when the collapse button is pressed', () => {
    const button = screen.getByRole('button', { expanded: false });

    fireEvent.click(button);

    const collapsed = screen.queryByRole('button', { expanded: false });
    expect(collapsed).toBeNull();
  });

  it('shows the content again when it is collapsed and the button is clicked', () => {
    const button = screen.getByRole('button', { expanded: false });

    fireEvent.click(button);
    fireEvent.click(button);

    const expanded = screen.queryByRole('button', { expanded: true });
    expect(expanded).toBeNull();
  });
});

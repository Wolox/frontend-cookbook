import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Collapsible from './index';

describe('Collapsible component', () => {
  const title = 'Collapsible Title';
  const className = 'collapsible-class';
  let fragment: DocumentFragment | null = null;
  let collapsibleContainer: Element | null = null;

  beforeEach(() => {
    const { asFragment, container } = render(
      <Collapsible title={title} isCollapsed className={className}>
        <div> some content </div>
      </Collapsible>
    );

    fragment = asFragment();
    collapsibleContainer = container;
  });

  it('renders without crashing', () => {
    expect(fragment).toMatchSnapshot();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(collapsibleContainer.firstChild).toHaveClass(className);
  });

  it('toggle between show and hide the children content', async () => {
    expect(screen.queryByText('some content')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(title));

    expect(await screen.findByText('some content')).toBeInTheDocument();
  });
});

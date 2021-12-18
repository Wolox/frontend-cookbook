import React from 'react';
import { render, screen } from '@testing-library/react';

import InfiniteScroll from '.';

interface Entries {
  isIntersecting: boolean;
}

beforeEach(() => {
  class IntersectionObserver {
    constructor(callback: (entries: Entries[]) => void) {
      callback([
        {
          isIntersecting: true
        }
      ]);
    }

    observe = jest.fn();

    disconnect = jest.fn();

    unobserve = jest.fn();
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver
  });

  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver
  });
});

const LIST_ITEMS = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
const listComponentMock = () => (
  <>
    {LIST_ITEMS.map((item) => (
      <li key={item} role="listitem">
        {item}
      </li>
    ))}
  </>
);

describe('Component Infinite Scroll', () => {
  test('Displays the list of items', () => {
    render(
      <InfiniteScroll hasMore isLoading={false} onLoadMore={jest.fn()}>
        {listComponentMock()}
      </InfiniteScroll>
    );
    const list = screen.getAllByRole('listitem');
    expect(list.length).toBe(LIST_ITEMS.length);
  });
  test('The function onLoadMore is called', () => {
    const nextPage = jest.fn();
    render(
      <InfiniteScroll hasMore isLoading={false} onLoadMore={nextPage}>
        {listComponentMock()}
      </InfiniteScroll>
    );
    expect(nextPage).toBeCalled();
  });
  test('When a class name is passed - add the class name to the list container', () => {
    const nextPage = jest.fn();
    const { container } = render(
      <InfiniteScroll hasMore isLoading onLoadMore={nextPage} className="MyClassName">
        {listComponentMock()}
      </InfiniteScroll>
    );
    expect(container.firstChild).toHaveClass('MyClassName');
  });
  test('when a component loading is passed - Displays the loading component when the list is loading', () => {
    const myComponentLoader = <div>My Loading Component...</div>;
    const nextPage = jest.fn();
    render(
      <InfiniteScroll hasMore isLoading onLoadMore={nextPage} loader={myComponentLoader}>
        {listComponentMock()}
      </InfiniteScroll>
    );

    const componentWanted = screen.queryByText('My Loading Component...');
    const defaultLoading = screen.queryByTestId('default-message');

    expect(defaultLoading).not.toBeInTheDocument();
    expect(componentWanted).toBeInTheDocument();
  });
  test('when a text loading is passed - Displays the text with a spinner when the list is loading', () => {
    const nextPage = jest.fn();
    render(
      <InfiniteScroll hasMore isLoading onLoadMore={nextPage} loader="String for Loading">
        {listComponentMock()}
      </InfiniteScroll>
    );

    const textWanted = screen.queryByText('String for Loading');
    const defaultLoading = screen.queryByTestId('default-message');
    const spinnerWanted = screen.queryByTestId('spinner');

    expect(defaultLoading).not.toBeInTheDocument();
    expect(textWanted).toBeInTheDocument();
    expect(spinnerWanted).toBeInTheDocument();
  });
  test('when a loading is not passed - Displays the default text with a spinner when the list is loading', () => {
    const nextPage = jest.fn();
    render(
      <InfiniteScroll hasMore isLoading onLoadMore={nextPage}>
        {listComponentMock()}
      </InfiniteScroll>
    );

    const defaultLoading = screen.queryByTestId('default-message');
    const spinnerWanted = screen.queryByTestId('spinner');
    expect(defaultLoading).toBeInTheDocument();
    expect(spinnerWanted).toBeInTheDocument();
  });
  test('when a component end message is passed - Displays the end message component when the list is finished', () => {
    const myComponentEndMessage = <div>Finish List</div>;
    const nextPage = jest.fn();
    render(
      <InfiniteScroll
        hasMore={false}
        isLoading={false}
        onLoadMore={nextPage}
        endMessage={myComponentEndMessage}
      >
        {listComponentMock()}
      </InfiniteScroll>
    );

    const componentWanted = screen.queryByText('Finish List');
    const defaultEndMessage = screen.queryByTestId('default-message');

    expect(defaultEndMessage).not.toBeInTheDocument();
    expect(componentWanted).toBeInTheDocument();
  });
  test('when a text end message is passed - Displays the text sent when the list is finished', () => {
    const nextPage = jest.fn();
    render(
      <InfiniteScroll hasMore={false} isLoading={false} onLoadMore={nextPage} endMessage="Finish List">
        {listComponentMock()}
      </InfiniteScroll>
    );

    const textWanted = screen.queryByText('Finish List');
    const defaultEndMessage = screen.queryByTestId('default-message');
    const spinner = screen.queryByTestId('spinner');

    expect(spinner).not.toBeInTheDocument();
    expect(defaultEndMessage).not.toBeInTheDocument();
    expect(textWanted).toBeInTheDocument();
  });
  test('when a end message is not passed - Displays the default end message when the list is finished', () => {
    const nextPage = jest.fn();
    render(
      <InfiniteScroll hasMore={false} isLoading={false} onLoadMore={nextPage}>
        {listComponentMock()}
      </InfiniteScroll>
    );

    const defaultMessage = screen.queryByTestId('default-message');
    const spinner = screen.queryByTestId('spinner');
    expect(spinner).not.toBeInTheDocument();
    expect(defaultMessage).toBeInTheDocument();
  });
});

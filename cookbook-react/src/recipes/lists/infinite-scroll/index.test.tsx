import React from 'react';
import { render, screen } from '@testing-library/react';

import PageInfiniteScroll from '.';

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

describe('Page Infinite Scroll', () => {
  test('there are two radio type inputs on the screen', () => {
    render(<PageInfiniteScroll />);
    const radio = screen.getAllByRole('radio');
    expect(radio.length).toBe(2);
  });
});

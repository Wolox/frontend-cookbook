import React from 'react';
import { render, screen } from '@testing-library/react';

import ListScreen from './list';

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

describe('Screen Infinite Scroll', () => {
  test('Show title', () => {
    render(<ListScreen />);
    const title = screen.queryByText('Listado de elementos');
    expect(title).toBeInTheDocument();
  });
});

/* eslint-disable react/no-multi-comp, @typescript-eslint/naming-convention */
import { render, screen } from '@testing-library/react';
import React from 'react';

import withSpinner from '.';

const componentTitle = 'My Component';
const MyComponent = () => <span>{componentTitle}</span>;

describe('When a class name is passed', () => {
  const myComponentHOC = withSpinner({ classNameContainer: 'a class', name: 'three-bounce' });
  const WrappedComponent = myComponentHOC(MyComponent);

  test('Displays a spinner when the component is loading', () => {
    const ParentComponent = () => <WrappedComponent loading />;

    render(<ParentComponent />);

    const titleElement = screen.queryByText(componentTitle);
    const loadingElement = screen.getByTestId('MyComponentLoading');

    expect(titleElement).not.toBeInTheDocument();
    expect(loadingElement).toBeInTheDocument();
  });

  test('Displays athe component when it is not loading', () => {
    const ParentComponent = () => <WrappedComponent loading={false} />;

    render(<ParentComponent />);

    const titleElement = screen.getByText(componentTitle);
    const loadingElement = screen.queryByTestId('MyComponentLoading');

    expect(loadingElement).not.toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});

describe('When a class name is not passed', () => {
  const myComponentHOC = withSpinner({ name: 'three-bounce' });
  const WrappedComponent = myComponentHOC(MyComponent);

  test('Displays a spinner when the component is loading', () => {
    const ParentComponent = () => <WrappedComponent loading />;

    render(<ParentComponent />);

    const titleElement = screen.queryByText(componentTitle);
    const loadingElement = screen.getByTestId('MyComponentLoading');

    expect(titleElement).not.toBeInTheDocument();
    expect(loadingElement).toBeInTheDocument();
  });

  test('Displays athe component when it is not loading', () => {
    const ParentComponent = () => <WrappedComponent loading={false} />;

    render(<ParentComponent />);

    const titleElement = screen.getByText(componentTitle);
    const loadingElement = screen.queryByTestId('MyComponentLoading');

    expect(loadingElement).not.toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});

describe('When there is no spinner config', () => {
  const myComponentHOC = withSpinner();
  const WrappedComponent = myComponentHOC(MyComponent);

  test('Displays a spinner when the component is loading', () => {
    const ParentComponent = () => <WrappedComponent loading />;

    render(<ParentComponent />);

    const titleElement = screen.queryByText(componentTitle);
    const loadingElement = screen.getByTestId('MyComponentLoading');

    expect(titleElement).not.toBeInTheDocument();
    expect(loadingElement).toBeInTheDocument();
  });

  test('Displays the component when it is not loading', () => {
    const ParentComponent = () => <WrappedComponent loading={false} />;

    render(<ParentComponent />);

    const titleElement = screen.getByText(componentTitle);
    const loadingElement = screen.queryByTestId('MyComponentLoading');

    expect(loadingElement).not.toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});

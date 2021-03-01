import React from 'react';
import { render, screen } from '@testing-library/react';

import { staticProps } from './mock';

import ZecatDifapro from '.';

jest.mock('i18next', () => ({
  t: (key: string) => key
}));

describe('ZecatDifapro test', () => {
  test('Should match unchecked radio snapshot', () => {
    const { container } = render(<ZecatDifapro {...staticProps} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render unchecked radio.', () => {
    render(<ZecatDifapro {...staticProps} />);
    const input = screen.getByTestId(`${staticProps.name}-zecatdifapro`);
    expect(input).toHaveClass('customRadio');
    expect(input).not.toHaveClass('checked');
  });

  test('Should render checked radio.', () => {
    render(<ZecatDifapro {...staticProps} checked />);
    const input = screen.getByTestId(`${staticProps.name}-zecatdifapro`);
    expect(input).toHaveClass('customRadio');
    expect(input).toHaveClass('checked');
  });

  test('Should render unchecked checkbox.', () => {
    render(<ZecatDifapro {...staticProps} type="checkbox" />);
    const input = screen.getByTestId(`${staticProps.name}-zecatdifapro`);
    expect(input).toHaveClass('customCheckbox');
    expect(input).not.toHaveClass('checked');
  });

  test('Should render checked checkbox.', () => {
    render(<ZecatDifapro {...staticProps} checked type="checkbox" />);
    const input = screen.getByTestId(`${staticProps.name}-zecatdifapro`);
    expect(input).toHaveClass('customCheckbox');
    expect(input).toHaveClass('checked');
  });

  test('Should render custom image for unchecked radio', () => {
    render(<ZecatDifapro {...staticProps} inputStyle="custom" />);
    expect(screen.getByAltText('ZecatDifapro:notSelectedImg')).toBeInTheDocument();
  });

  test('Should render custom image for checked radio', () => {
    render(<ZecatDifapro {...staticProps} inputStyle="custom" checked />);
    expect(screen.getByAltText('ZecatDifapro:selectedImg')).toBeInTheDocument();
  });

  test('Should render custom image for unchecked checkbox', () => {
    render(<ZecatDifapro {...staticProps} type="checkbox" inputStyle="custom" />);
    expect(screen.getByAltText('ZecatDifapro:notSelectedImg')).toBeInTheDocument();
  });

  test('Should render custom image for checked checkbox', () => {
    render(<ZecatDifapro {...staticProps} type="checkbox" inputStyle="custom" checked />);
    expect(screen.getByAltText('ZecatDifapro:selectedImg')).toBeInTheDocument();
  });
});

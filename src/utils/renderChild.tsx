import React from 'react';

interface Props {
  children: React.ReactNode;
}

const RenderChild = ({ children }: Props) => React.Children.only(children);

export default RenderChild;

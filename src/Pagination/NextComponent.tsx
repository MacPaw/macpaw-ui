import React, { FC } from 'react';
import cx from 'clsx';
import BackIcon from '../Icons/jsx/BackIcon';

export interface NextComponentProps {
  currentPage: number;
  maxPage: number;
  renderItem: (n: number) => JSX.Element;
  nextLabel: string;
}

const NextComponent: FC<NextComponentProps> = ({ currentPage, maxPage, renderItem, nextLabel }) => {
  const isEnabled = currentPage < maxPage;
  const element = isEnabled ? renderItem(currentPage + 1) : React.createElement('div');

  // @ts-ignore
  return React.cloneElement(element as JSX.Element, {
    className: cx('pagination-nav', '-next', !isEnabled && '-disabled'),
    children: (
      <>
        {nextLabel}
        <BackIcon />
      </>
    ),
  });
};

export default NextComponent;

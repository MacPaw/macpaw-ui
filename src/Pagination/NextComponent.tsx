import React, { FC } from 'react';
import cx from 'clsx';
import BackIcon from '../Icons/jsx/BackIcon';

export interface NextComponentProps {
  currentPage: number;
  maxPage: number;
  renderItem: (n: number) => React.ReactElement;
  nextLabel: string;
}

const NextComponent: FC<NextComponentProps> = ({ currentPage, maxPage, renderItem, nextLabel }) => {
  const isEnabled = currentPage < maxPage;
  const element = isEnabled ? renderItem(currentPage + 1) : React.createElement('div');

  return React.cloneElement(element, {
    className: cx('pagination-nav', '-next', !isEnabled && '-disabled'),
    children: (
      <>
        {nextLabel}
        <BackIcon />
      </>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any);
};

export default NextComponent;

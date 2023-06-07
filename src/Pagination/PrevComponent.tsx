import React, { FC } from 'react';
import cx from 'clsx';
import BackIcon from '../Icons/jsx/BackIcon';

export interface PrevComponentProps {
  currentPage: number;
  minPage: number;
  renderItem: (n: number) => JSX.Element;
  prevLabel: string;
}

const PrevComponent: FC<PrevComponentProps> = ({ currentPage, minPage, renderItem, prevLabel }) => {
  const isEnabled = currentPage > minPage;
  const element = isEnabled ? renderItem(currentPage - 1) : React.createElement('div');

  // @ts-ignore
  return React.cloneElement(element as JSX.Element, {
    className: cx('pagination-nav', '-prev', !isEnabled && '-disabled'),
    children: (
      <>
        <BackIcon />
        {prevLabel}
      </>
    ),
  });
};

export default PrevComponent;

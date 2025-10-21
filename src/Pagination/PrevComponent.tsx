import React, { FC } from 'react';
import cx from 'clsx';
import BackIcon from '../Icons/jsx/BackIcon';

export interface PrevComponentProps {
  currentPage: number;
  minPage: number;
  renderItem: (n: number) => React.ReactElement;
  prevLabel: string;
}

const PrevComponent: FC<PrevComponentProps> = ({ currentPage, minPage, renderItem, prevLabel }) => {
  const isEnabled = currentPage > minPage;
  const element = isEnabled ? renderItem(currentPage - 1) : React.createElement('div');

  return React.cloneElement(element, {
    className: cx('pagination-nav', '-prev', !isEnabled && '-disabled'),
    children: (
      <>
        <BackIcon />
        {prevLabel}
      </>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any);
};

export default PrevComponent;

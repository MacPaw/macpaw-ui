import React, { DetailedReactHTMLElement, FC } from 'react';
import cx from 'clsx';
import BackIcon from '../Icons/jsx/BackIcon';

export interface PrevComponentProps {
  currentPage: number;
  minPage: number;
  renderItem: (n: number) => DetailedReactHTMLElement<{ children: JSX.Element; className: string }, HTMLElement>;
  prevLabel: string;
}

const PrevComponent: FC<PrevComponentProps> = ({ currentPage, minPage, renderItem, prevLabel }) => {
  const isEnabled = currentPage > minPage;
  const element = isEnabled ? renderItem(currentPage - 1) : React.createElement('div');

  return React.cloneElement(
    element as DetailedReactHTMLElement<{ children: JSX.Element; className: string }, HTMLElement>,
    {
      className: cx('pagination-nav', '-prev', !isEnabled && '-disabled'),
      children: (
        <>
          <BackIcon />
          {prevLabel}
        </>
      ),
    },
  );
};

export default PrevComponent;

import React, { DetailedReactHTMLElement, FC } from 'react';
import cx from 'clsx';
import BackIcon from '../Icons/jsx/BackIcon';

export interface NextComponentProps {
  currentPage: number;
  maxPage: number;
  renderItem: (n: number) => DetailedReactHTMLElement<{ children: JSX.Element; className: string }, HTMLElement>;
  nextLabel: string;
}

const NextComponent: FC<NextComponentProps> = ({ currentPage, maxPage, renderItem, nextLabel }) => {
  const isEnabled = currentPage < maxPage;
  const element = isEnabled ? renderItem(currentPage + 1) : React.createElement('div');

  return React.cloneElement(
    element as DetailedReactHTMLElement<{ children: JSX.Element; className: string }, HTMLElement>,
    {
      className: cx('pagination-nav', '-next', !isEnabled && '-disabled'),
      children: (
        <>
          {nextLabel}
          <BackIcon />
        </>
      ),
    },
  );
};

export default NextComponent;

import React, { FC, HTMLAttributes, ReactElement } from 'react';
import cx from 'clsx';
import BackIcon from '../Icons/jsx/BackIcon';

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  renderItem: (n: number) => JSX.Element;
  maxPage: number;
  currentPage: number;
  nextLabel?: string;
  prevLabel?: string;
}

const Pagination: FC<PaginationProps> = (props) => {
  const {
    className,
    currentPage,
    maxPage,
    renderItem,
    prevLabel = 'Previous',
    nextLabel = 'Next',
    ...other
  } = props;
  const minPage = 1;
  const rangeValue = -1;
  const pageNumbersCapacity = maxPage < 7 ? maxPage : 7;
  const pageNumbers = [currentPage];

  if (maxPage < currentPage) {
    console.error(`[Pagination]: current[${currentPage}] > max[${maxPage}]`);

    return null;
  }

  /* generate number array */
  for (let i = 1; i < maxPage; i += 1) {
    if (currentPage - i >= minPage) pageNumbers.unshift(currentPage - i);
    if (pageNumbers.length === pageNumbersCapacity) break;
    if (currentPage + i <= maxPage) pageNumbers.push(currentPage + i);
    if (pageNumbers.length === pageNumbersCapacity) break;
  }

  /* insert left range */
  if (pageNumbers[0] !== minPage) {
    pageNumbers[0] = minPage;
    pageNumbers[1] = rangeValue;
  }

  /* insert right range */
  if (pageNumbers[pageNumbersCapacity - 1] !== maxPage) {
    pageNumbers[pageNumbersCapacity - 1] = maxPage;
    pageNumbers[pageNumbersCapacity - 2] = rangeValue;
  }

  function PrevComponent() {
    const isEnabled = currentPage > minPage;
    const element = isEnabled ? renderItem(currentPage - 1) : React.createElement('div');

    return React.cloneElement(element as ReactElement<any>, {
      className: cx('pagination-nav', '-prev', !isEnabled && '-disabled'),
      children: (
        <>
          <BackIcon />
          {prevLabel}
        </>
      ),
    });
  }

  function NextComponent() {
    const isEnabled = currentPage < maxPage;
    const element = isEnabled ? renderItem(currentPage + 1) : React.createElement('div');

    return React.cloneElement(element as ReactElement<any>, {
      className: cx('pagination-nav', '-next', !isEnabled && '-disabled'),
      children: (
        <>
          {nextLabel}
          <BackIcon />
        </>
      ),
    });
  }

  return (
    <div className={cx('pagination', className)} {...other}>
      <PrevComponent />
      {pageNumbers.map((n, index) => {
        const key = `${n}-${index}`;

        if (n === rangeValue) {
          return <div key={key} className="pagination-page -disabled">...</div>;
        }

        return React.cloneElement(renderItem(n), {
          key,
          className: cx('pagination-page', (currentPage === n) && '-active'),
        });
      })}
      <NextComponent />
    </div>
  );
};

export default Pagination;

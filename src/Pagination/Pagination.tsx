import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';
import NextComponent from './NextComponent';
import PrevComponent from './PrevComponent';

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  renderItem: (n: number) => JSX.Element;
  maxPage: number;
  currentPage: number;
  nextLabel?: string;
  prevLabel?: string;
}

const getPageNumbersCapacity = (maxPage: number) => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  return maxPage < 7 ? maxPage : 7;
};

const Pagination: FC<React.PropsWithChildren<PaginationProps>> = (props) => {
  const { className, currentPage, maxPage, renderItem, prevLabel = 'Previous', nextLabel = 'Next', ...other } = props;
  const minPage = 1;
  const rangeValue = -1;
  const pageNumbersCapacity = getPageNumbersCapacity(maxPage);
  const pageNumbers = [currentPage];

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  if (maxPage < 2) return null;

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
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    pageNumbers[pageNumbersCapacity - 2] = rangeValue;
  }

  return (
    <div className={cx('pagination', className)} {...other}>
      <PrevComponent currentPage={currentPage} minPage={minPage} renderItem={renderItem} prevLabel={prevLabel} />
      {pageNumbers.map((n, index) => {
        const key = `${n}-${index}`;

        if (n === rangeValue)
          return (
            <div key={key} className="pagination-page -disabled">
              ...
            </div>
          );

        // @ts-ignore
        return React.cloneElement(renderItem(n), {
          key,
          className: cx('pagination-page', currentPage === n && '-active'),
        });
      })}
      <NextComponent currentPage={currentPage} maxPage={maxPage} renderItem={renderItem} nextLabel={nextLabel} />
    </div>
  );
};

export default Pagination;

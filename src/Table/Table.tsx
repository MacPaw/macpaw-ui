import React, { FC, TableHTMLAttributes } from 'react';
import cx from 'clsx';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
}

const Table: FC<React.PropsWithChildren<TableProps>> = (props) => {
  const { className, children, ...other } = props;

  return (
    <table className={cx('table', className)} {...other}>
      {children}
    </table>
  );
};

export default Table;

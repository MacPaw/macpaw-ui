import React from 'react';
import cx from 'clsx';

const Table = (props) => {
  const { className, children, ...other } = props;

  return (
    <table className={cx('table', className)} {...other}>
      {children}
    </table>
  );
};

export default Table;

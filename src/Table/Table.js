import React from 'react';
import cx from 'clsx';

const Table = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('table', className)} {...other}>
      {children}
    </div>
  );
};

export default Table;

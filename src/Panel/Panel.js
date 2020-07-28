import React from 'react';
import cx from 'clsx';

const Panel = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('panel', className)} {...other}>{children}</div>
  );
};

export default Panel;

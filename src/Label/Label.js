import React from 'react';
import cx from 'clsx';

const Label = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('label', className)} {...other}>{children}</div>
  );
};

export default Label;

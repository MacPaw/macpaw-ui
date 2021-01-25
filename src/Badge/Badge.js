import React from 'react';
import cx from 'clsx';

const Badge = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('badge', className)} {...other}>{children}</div>
  );
};

export default Badge;

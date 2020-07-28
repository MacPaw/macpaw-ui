import React from 'react';
import cx from 'clsx';

const Panel = (props) => {
  const {
    className,
    outline,
    children, ...other
  } = props;

  return (
    <div className={cx('panel', outline && '-outline', className)} {...other}>{children}</div>
  );
};

export default Panel;

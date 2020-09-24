import React from 'react';
import cx from 'clsx';

const Checkbox = (props) => {
  const {
    className,
    error,
    children,
    ...other
  } = props;

  return (
    <label className={cx('checkbox', className, error && '-error')}>
      <input type="checkbox" {...other} />
      <span />
      {children}
    </label>
  );
};

export default Checkbox;

import React from 'react';
import cx from 'clsx';

const Checkbox = (props) => {
  const {
    className,
    checked,
    disabled,
    error,
    children,
    ...other
  } = props;

  return (
    <label className={cx('checkbox', className, error && '-error')}>
      <input type="checkbox" checked={checked} disabled={disabled} {...other} />
      <span />
      {children}
    </label>
  );
};

export default Checkbox;

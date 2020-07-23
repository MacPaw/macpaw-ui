import React from 'react';
import cx from 'clsx';

const Select = (props) => {
  const {
    className,
    selected,
    disabled,
    error,
    children,
    ...other
  } = props;

  return (
    <select className={cx('select', className, error && '-error')} value={selected} disabled={disabled} {...other}>
      {children}
    </select>
  );
};

export default Select;

import React, { forwardRef } from 'react';
import cx from 'clsx';

const Checkbox = forwardRef((props, ref) => {
  const {
    className,
    error,
    children,
    ...other
  } = props;

  return (
    <label className={cx('checkbox', className, error && '-error')}>
      <input type="checkbox" {...other} ref={ref} />
      <span />
      {children}
    </label>
  );
});

export default Checkbox;

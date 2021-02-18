import React, { forwardRef, InputHTMLAttributes } from 'react';
import cx from 'clsx';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
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

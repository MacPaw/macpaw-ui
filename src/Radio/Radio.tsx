import React, { FC, InputHTMLAttributes } from 'react';
import cx from 'clsx';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Radio: FC<RadioProps> = (props) => {
  const {
    className,
    error,
    children,
    ...other
  } = props;

  return (
    <label className={cx('radio', className, error && '-error')}>
      <input type="radio" {...other} />
      {children}
    </label>
  );
};

export default Radio;

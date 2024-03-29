import React, { FC, InputHTMLAttributes } from 'react';
import cx from 'clsx';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Radio: FC<React.PropsWithChildren<RadioProps>> = (props) => {
  const { className, error, children, ...other } = props;

  return (
    <label className={cx('radio', className, error && '-error')}>
      <input type="radio" {...other} className={cx('radio__input', 'radio__input_default', error && '-error')} />
      {children}
    </label>
  );
};

export default Radio;

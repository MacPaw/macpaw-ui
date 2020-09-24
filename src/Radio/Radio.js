import React from 'react';
import cx from 'clsx';

const Radio = (props) => {
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

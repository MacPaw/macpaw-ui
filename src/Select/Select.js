import React from 'react';
import cx from 'clsx';
import Hint from '../Hint/Hint';

const Select = (props) => {
  const {
    className,
    selected,
    disabled,
    error,
    size,
    children,
    ...other
  } = props;

  return (
    <>
      <select
        className={cx(
          'select',
          className,
          error && '-error',
          size === 'big' && '-big'
        )}
        value={selected}
        disabled={disabled}
        {...other}
      >
        {children}
      </select>
      {error && <Hint style={{ marginTop: 6 }} error>{`* ${error}`}</Hint>}
    </>
  );
};

export default Select;

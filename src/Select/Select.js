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
    style,
    children,
    label,
    ...other
  } = props;

  const classNames = cx('select', {
    className,
    '-error': Boolean(error),
    '-medium': size === 'medium',
    '-small': size === 'small',
    '-big': size === 'big',
  });

  const showHintError = error && typeof error !== 'boolean';

  return (
    <label className={classNames} style={style}>
      {label && <span className="h6">{label}</span>}
      <select value={selected} disabled={disabled} {...other}>
        {children}
      </select>
      {showHintError && (<Hint style={{ marginTop: 6 }} error>{error}</Hint>)}
    </label>
  );
};

export default Select;

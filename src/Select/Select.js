import React from 'react';
import cx from 'clsx';
import Hint from '../Hint/Hint';

const Select = (props) => {
  const {
    className,
    selected,
    disabled,
    errorMessage,
    size,
    style,
    children,
    label,
    ...other
  } = props;

  const classNames = cx('select', { className, '-error': Boolean(errorMessage), '-medium': size === 'medium', '-small': size === 'small', '-big': size === 'big' });

  return (
    <label className={classNames} style={style}>
      {label && <span className="h6">{label}</span>}
      <select value={selected} disabled={disabled} {...other}>
        {children}
      </select>
      {errorMessage && (
        <Hint style={{ marginTop: 6 }} error>{`* ${errorMessage}`}</Hint>
      )}
    </label>
  );
};

export default Select;

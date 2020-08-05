import React from 'react';
import cx from 'clsx';
import Hint from '../Hint/Hint';

const Input = (props) => {
  const {
    type,
    value,
    name,
    placeholder = '',
    errorMessage,
    size,
    labelModifier,
    disabled = false,
    style,
    action,
    ...other
  } = props;

  const classNames = cx('input', {
    [labelModifier]: Boolean(labelModifier),
    '-error': Boolean(errorMessage),
    '-medium': size === 'medium',
    '-small': size === 'small',
    '-big': size === 'big',
    '-action': Boolean(action),
  });

  return (
    <label className={classNames} style={style}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        {...other}
      />
      {action && <div className="input-action">{action}</div>}
      {errorMessage && <Hint error>{errorMessage}</Hint>}
    </label>
  );
};

export default Input;

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
    ...other
  } = props;

  const classNames = cx('input', {
    [labelModifier]: !!labelModifier,
    '-error': !!errorMessage,
    '-medium': size === 'medium',
    '-small': size === 'small',
    '-big': size === 'big',
  });

  return (
    // TODO: fix htmlFor bug
  // eslint-disable-next-line no-alert
    <label className={classNames}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        {...other}
      />
      {errorMessage && <Hint error children={errorMessage} />}
    </label>
  );
};

export default Input;

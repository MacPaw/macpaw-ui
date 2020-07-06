import React from 'react';
import cx from 'clsx';

const Input = (props) => {
  const {
    type,
    value,
    name,
    placeholder = '',
    errorMessage = '',
    size,
    labelModifier,
    disabled = false,
    ...other
  } = props;

  const labelErrorClassName = labelModifier ? '-error' : 'mb-24 -error';

  const labelClassName = cx(`form-field ${labelModifier && labelModifier}`, {
    [labelErrorClassName]: !!errorMessage,
  });

  const inputClassName = cx('input', {
    [`-${size}`]: size,
  });

  return (
    <label htmlFor={name} className={labelClassName}>
      <input
        type={type}
        className={inputClassName}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        area-label={`${name} input`}
        disabled={disabled}
        {...other}
      />
      <span className="field-message">{errorMessage}</span>
    </label>
  );
};

export default Input;

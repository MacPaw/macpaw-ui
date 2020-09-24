import React from 'react';
import cx from 'clsx';
import Hint from '../Hint/Hint';

const Input = (props) => {
  const {
    type = 'text',
    value,
    name,
    placeholder = '',
    errorMessage,
    size,
    disabled = false,
    multiline = false,
    style,
    action,
    label,
    ...other
  } = props;

  const classNames = cx('input', {
    '-error': Boolean(errorMessage),
    '-medium': size === 'medium',
    '-small': size === 'small',
    '-big': size === 'big',
    '-action': Boolean(action),
  });

  const componentProps = {};
  const Component = multiline ? 'textarea' : 'input';

  if (Component === 'input') {
    componentProps.type = type;
  }

  return (
    <label className={classNames} style={style}>
      {label && <span className="h6">{label}</span>}
      <Component
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        {...componentProps}
        {...other}
      />
      {action && <div className="input-action">{action}</div>}
      {errorMessage && <Hint error>{errorMessage}</Hint>}
    </label>
  );
};

export default Input;

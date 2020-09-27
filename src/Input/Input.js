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
  });

  const componentProps = {};
  const Component = multiline ? 'textarea' : 'input';

  if (Component === 'input') {
    componentProps.type = type;
  }

  return (
    <label className={classNames} style={style}>
      {label && <span className="h6">{label}</span>}
      <span className="input-field">
        <Component
          name={name}
          placeholder={placeholder}
          defaultValue={value}
          disabled={disabled}
          {...componentProps}
          {...other}
        />
        {action && <span className="input-action">{action}</span>}
      </span>
      {errorMessage && <Hint error>{errorMessage}</Hint>}
    </label>
  );
};

export default Input;

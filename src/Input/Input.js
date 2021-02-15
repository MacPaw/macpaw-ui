import React, { forwardRef } from 'react';
import cx from 'clsx';
import Hint from '../Hint/Hint';

const Input = forwardRef((props, ref) => {
  const {
    type = 'text',
    multiline = false,
    error,
    size,
    style,
    action,
    label,
    className,
    ...other
  } = props;

  const classNames = cx('input', {
    '-error': Boolean(error),
    '-medium': size === 'medium',
    '-small': size === 'small',
    '-big': size === 'big',
  });

  const componentProps = {
    className: cx(action && '-with-action', className),
  };

  const showHintError = error && typeof error !== 'boolean';
  const Component = multiline ? 'textarea' : 'input';

  if (Component === 'input') {
    componentProps.type = type;
  }

  return (
    <label className={classNames} style={style}>
      {label && <span className="input-label h6">{label}</span>}
      <span className="input-field">
        <Component
          {...componentProps}
          {...other}
          aria-label={label && other.placeholder}
          ref={ref}
        />
        {action && <span className="input-action">{action}</span>}
      </span>
      {showHintError && <Hint error style={{ marginTop: 6 }}>{error}</Hint>}
    </label>
  );
});

export default Input;

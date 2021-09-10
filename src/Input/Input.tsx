import React, { ElementType, forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';
import Hint from '../Hint/Hint';
import { Error } from '../types';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: 'medium' | 'small' | 'big';
  error?: Error;
  action?: ReactNode;
  multiline?: boolean;
  label?: string | ReactNode;
  rows?: number;
  currency?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type = 'text',
    multiline = false,
    error,
    scale,
    style,
    action,
    label,
    currency,
    className,
    ...other
  } = props;

  const classNames = cx('input', {
    '-error': Boolean(error),
    '-medium': scale === 'medium',
    '-small': scale === 'small',
    '-big': scale === 'big',
  });

  const componentProps: any = {
    className: cx(action && '-with-action', currency && '-with-currency', className),
  };

  const showHintError = error && typeof error !== 'boolean';
  const Component = multiline ? 'textarea' : 'input' as ElementType;

  if (Component === 'input') {
    componentProps.type = type;
  }

  if (currency && currency.length > 3) {
    throw Error('currency characters must not exceed 3');
  }

  if (action && currency) {
    throw Error('action and currency cannot be set at the same time');
  }

  return (
    <label className={classNames} style={style}>
      {label && <span className="input-label h6">{label}{`${other.required ? ' *' : ''}`}</span>}
      <span className="input-field">
        <Component
          {...componentProps}
          {...other}
          aria-label={label && other.placeholder}
          ref={ref}
        />
        {action && <span className="input-action">{action}</span>}
        {currency && <span className="input-currency">{currency}</span>}
      </span>
      {showHintError && <Hint error style={{ marginTop: 6 }}>{error}</Hint>}
    </label>
  );
});

export default Input;

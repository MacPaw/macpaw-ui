import React, { ElementType, forwardRef, InputHTMLAttributes, ReactNode, useRef } from 'react';
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
  formatOnEvent?: 'blur' | 'keyUp';
  format?: (value: string | number | readonly string[]) => string | number | readonly string[];
  setValue?: (value: string | number | readonly string[]) => void;
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
    value,
    onChange,
    formatOnEvent = '',
    format,
    setValue,
    ...other
  } = props;

  const isDirtyRef = useRef(false);

  const classNames = cx('input', {
    '-error': Boolean(error),
    '-medium': scale === 'medium',
    '-small': scale === 'small',
    '-big': scale === 'big',
  });

  const Component = multiline ? 'textarea' : 'input' as ElementType;
  const showHintError = error && typeof error !== 'boolean';
  const formatEvent = `on${formatOnEvent[0]?.toUpperCase() + formatOnEvent.slice(1)}`;
  const inputValue = !isDirtyRef.current ? (format?.(value) ?? value) : value;
  const inputClassNames = cx(className, {
    '-with-action': action,
    '-with-currency': currency
  });

  const componentProps: any = {
    className: inputClassNames,
    ...(Component === 'input' && { type }),
    ...(formatOnEvent && { [formatEvent]: () => setValue?.(format?.(value) ?? value) })
  };

  if (currency && currency.length > 3) {
    throw Error('currency characters must not exceed 3');
  }

  if (action && currency) {
    throw Error('action and currency cannot be set at the same time');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDirtyRef.current) isDirtyRef.current = true;

    onChange(e);
  };

  return (
    <label className={classNames} style={style}>
      {label && <span className="input-label h6">{label}{`${other.required ? ' *' : ''}`}</span>}
      <span className="input-field">
        <Component
          {...componentProps}
          {...other}
          value={inputValue}
          onChange={handleChange}
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

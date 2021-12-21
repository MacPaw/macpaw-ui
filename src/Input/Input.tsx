/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  ElementType,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useEffect,
} from 'react';
import cx from 'clsx';
import Hint from '../Hint/Hint';
import { Error as InputError, InputValueType } from '../types';

type InputElementType = HTMLInputElement | HTMLTextAreaElement;

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  scale?: 'medium' | 'small' | 'big';
  error?: InputError;
  action?: ReactNode;
  multiline?: boolean;
  label?: string | ReactNode;
  rows?: number;
  currency?: string;
  formatOnEvent?: 'blur' | 'input';
  format?: (value: InputValueType) => InputValueType;
  onChange?: (value:InputValueType, event?: React.ChangeEvent<InputElementType>) => void;
}


const Input = forwardRef<InputElementType, InputProps>((props, ref) => {
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
    value = '',
    onChange,
    formatOnEvent = '',
    format,
    ...other
  } = props;

  const isDirtyRef = useRef(false);
  const inputRef = useRef<InputElementType>();

  const classNames = cx('input', {
    '-error': Boolean(error),
    '-medium': scale === 'medium',
    '-small': scale === 'small',
    '-big': scale === 'big',
  });

  const Component = multiline ? 'textarea' : 'input' as ElementType;
  const showHintError = error && typeof error !== 'boolean';
  const inputValue = !isDirtyRef.current ? (format?.(value) ?? value) : value;
  const inputClassNames = cx(className, {
    '-with-action': action,
    '-with-currency': currency
  });

  const componentProps: any = {
    className: inputClassNames,
    ...(Component === 'input' && { type }),
  };

  if (currency && currency.length > 3) {
    throw Error('currency characters must not exceed 3');
  }

  if (action && currency) {
    throw Error('action and currency cannot be set at the same time');
  }

  const setRef = (element: InputElementType) => {
    if (typeof ref === 'function') ref(element);
    else if (ref) ref.current = element;

    inputRef.current = element;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDirtyRef.current) isDirtyRef.current = true;

    const inputValue = (event.target as InputElementType).value;
    onChange?.(inputValue, event);
  };

  useEffect(() => {
    const { current: input } = inputRef;

    if (!formatOnEvent || !input) return () => {};

    const handleFormatOnEvent = (event: InputEvent | FocusEvent) => {
      const inputValue = (event.target as InputElementType).value;
      onChange?.(format?.(inputValue) ?? inputValue);
    };

    input.addEventListener(formatOnEvent, handleFormatOnEvent as EventListener);

    return () => {
      input.removeEventListener(formatOnEvent, handleFormatOnEvent as EventListener);
    };
  }, []);

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
          ref={setRef}
        />
        {action && <span className="input-action">{action}</span>}
        {currency && <span className="input-currency">{currency}</span>}
      </span>
      {showHintError && <Hint error style={{ marginTop: 6 }}>{error}</Hint>}
    </label>
  );
});

export default Input;

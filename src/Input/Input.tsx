/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  ElementType,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useEffect,
  KeyboardEvent,
} from 'react';
import cx from 'clsx';
import Clipboard from '../Clipboard/Clipboard';
import { isAutofill } from '../helpers';
import Hint from '../Hint/Hint';
import { Error as InputError, InputValueType } from '../types';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  scale?: 'medium' | 'small' | 'big';
  error?: InputError;
  action?: ReactNode;
  multiline?: boolean;
  label?: string | ReactNode;
  icon?: ReactNode;
  rows?: number;
  currency?: string;
  formatOnEvent?: 'blur' | 'input';
  format?: (value: InputValueType) => InputValueType;
  onChange?: (value: InputValueType, event?: React.ChangeEvent<HTMLInputElement>) => void;
  onCopyEvent?: (value: InputValueType) => void;
  onAutofill?: () => void;
  clipboard?: boolean | string | React.ReactElement;
}

const CURRENCY_MAX_LEAGTH = 3;

// eslint-disable-next-line complexity
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
    icon,
    value,
    onChange,
    onCopyEvent,
    formatOnEvent = '',
    format,
    onAutofill,
    clipboard,
    ...other
  } = props;

  const isDirtyRef = useRef(false);
  // eslint-disable-next-line no-undefined
  const inputRef = useRef<HTMLInputElement | undefined>(undefined);

  const classNames = cx('input', {
    '-error': Boolean(error),
    '-medium': scale === 'medium',
    '-small': scale === 'small',
    '-big': scale === 'big',
  });

  const Component = multiline ? 'textarea' : ('input' as ElementType);
  const showHintError = error && typeof error !== 'boolean';
  const inputValue = !isDirtyRef.current ? format?.(value ?? '') ?? value : value;
  const inputClassNames = cx(className, {
    '-with-action': action,
    '-with-currency': currency,
    '-with-icon': icon,
    '-with-clipboard': clipboard,
  });

  const componentProps: ObjectLiteral = {
    className: inputClassNames,
    ...(Component === 'input' && { type }),
  };

  if (currency && currency.length > CURRENCY_MAX_LEAGTH) throw Error('currency characters must not exceed 3');

  if (action && currency) throw Error('action and currency cannot be set at the same time');

  const setRef = (element: HTMLInputElement) => {
    if (typeof ref === 'function') ref(element);
    else if (ref) ref.current = element;

    inputRef.current = element;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDirtyRef.current) isDirtyRef.current = true;

    const currentInputValue = (event.target as HTMLInputElement).value;

    onChange?.(currentInputValue, event);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    const isAutofillDetected = isAutofill(event);

    if (isAutofillDetected) onAutofill?.();
  };

  useEffect(() => {
    const { current: input } = inputRef;

    if (!formatOnEvent || !input) return () => {};

    const handleFormatOnEvent = (event: InputEvent | FocusEvent) => {
      const currentInputValue = (event.target as HTMLInputElement).value;

      onChange?.(format?.(currentInputValue) ?? currentInputValue);
    };

    input.addEventListener(formatOnEvent, handleFormatOnEvent as EventListener);

    return () => {
      input.removeEventListener(formatOnEvent, handleFormatOnEvent as EventListener);
    };
  }, []);

  return (
    <label className={classNames} style={style}>
      {label && (
        <span className="input-label h6">
          {label}
          {`${other.required ? ' *' : ''}`}
        </span>
      )}
      <span className="input-field">
        {icon && <span className="input-icon">{icon}</span>}
        <Component
          {...componentProps}
          {...other}
          value={inputValue}
          onChange={handleChange}
          onKeyUpCapture={handleKeyUp}
          aria-label={label && other.placeholder}
          ref={setRef}
        />
        {action && <span className="input-action">{action}</span>}
        {currency && <span className="input-currency">{currency}</span>}
        {clipboard && (
          <Clipboard
            element={inputRef}
            // eslint-disable-next-line no-undefined
            copy={typeof clipboard !== 'boolean' ? clipboard : undefined}
            onCopyEvent={onCopyEvent}
          />
        )}
      </span>
      {showHintError && (
        <Hint error style={{ marginTop: 6 }}>
          {error}
        </Hint>
      )}
    </label>
  );
});

export default Input;

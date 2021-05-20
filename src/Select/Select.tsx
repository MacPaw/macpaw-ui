import React, { FC, ReactNode, SelectHTMLAttributes } from 'react';
import cx from 'clsx';
import Hint from '../Hint/Hint';
import { Error } from '../types';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  scale?: 'medium' | 'small' | 'big';
  selected?: string;
  disabled?: boolean;
  error?: Error;
  label?: string | ReactNode;
  requiredHint?: boolean;
}

const Select: FC<SelectProps> = (props) => {
  const {
    className,
    selected,
    disabled,
    error,
    scale,
    style,
    children,
    label,
    requiredHint,
    ...other
  } = props;

  const classNames = cx('select', className, {
    '-error': Boolean(error),
    '-medium': scale === 'medium',
    '-small': scale === 'small',
    '-big': scale === 'big',
  });

  const showHintError = error && typeof error !== 'boolean';

  return (
    <label className={classNames} style={style}>
      {label && <span className="h6">{label}{`${requiredHint ? ' *' : ''}`}</span>}
      <select value={selected} disabled={disabled} {...other}>
        {children}
      </select>
      {showHintError && (<Hint style={{ marginTop: 6 }} error>{error}</Hint>)}
    </label>
  );
};

export default Select;

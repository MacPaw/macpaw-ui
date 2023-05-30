import React, { FC, InputHTMLAttributes, PropsWithChildren } from 'react';
import cx from 'clsx';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Switch: FC<PropsWithChildren<SwitchProps>> = (props) => {
  const { className, style, children, error, ...other } = props;

  return (
    <span className={cx('switch', className, error && '-error')} style={style}>
      <input type="checkbox" {...other} />
      <span className="switch-track">
        <span className="switch-thumb" />
      </span>
      {!!children && <span>{children}</span>}
    </span>
  );
};

export default Switch;

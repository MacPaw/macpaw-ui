import React, { forwardRef, ReactNode, ElementType, ButtonHTMLAttributes } from 'react';
import cx from 'clsx';
import PawIcon from '../Icons/jsx/PawIcon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'warning' | 'transparent';
  scale?: 'medium' | 'small';
  wide?: boolean;
  loading?: boolean;
  outline?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  href?: string;
  component?: ReactNode;
  asLink?: boolean;
  icon?: boolean;
  to?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    type = 'button',
    color = 'primary',
    component = 'button',
    scale,
    wide,
    disabled,
    loading,
    outline,
    iconLeft,
    iconRight,
    asLink,
    icon,
    ...other
  } = props;

  const classNames = cx(className, 'button', `-${color}`, {
    '-wide': wide,
    '-medium': scale === 'medium',
    '-small': scale === 'small',
    '-loading': loading,
    '-outline': outline,
    '-asLink': asLink,
    '-icon': icon,
  });

  const componentProps: any = {};

  let Component = component as ElementType;

  if (Component === 'button' && other.href) {
    Component = 'a';
  }

  if (Component === 'button') {
    componentProps.type = type;
    componentProps.disabled = disabled || loading;
  } else if (Component !== 'a' || !other.href) {
    componentProps.role = 'button';
  }

  return (
    <Component className={classNames} {...componentProps} {...other} ref={ref}>
      {iconLeft && <span className="button-icon -left">{iconLeft}</span>}
      {loading && <PawIcon className="button-loader" />}
      <span className="button-content">{children}</span>
      {iconRight && <span className="button-icon -right">{iconRight}</span>}
    </Component>
  );
});

export default Button;

import React, { forwardRef } from 'react';
import cx from 'clsx';
import PawIcon from '../Icons/jsx/PawIcon';

const Button = forwardRef((props, ref) => {
  const {
    children,
    className,
    type = 'button',
    color = 'primary',
    component = 'button',
    size,
    wide,
    disabled,
    loading,
    outline,
    iconLeft,
    iconRight,
    asLink,
    ...other
  } = props;

  const classNames = cx(className, 'button', `-${color}`, {
    '-wide': wide,
    '-medium': size === 'medium',
    '-small': size === 'small',
    '-loading': loading,
    '-outline': outline,
    '-asLink': asLink,
  });

  const componentProps = {};
  const isIconLeft = !loading && iconLeft;
  const isIconRight = !loading && iconRight;

  let Component = component;

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
      {isIconLeft && <span className="button-icon -left">{iconLeft}</span>}
      {loading && <PawIcon className="button-loader" />}
      {loading ? <span className="button-content">{children}</span> : children}
      {isIconRight && <span className="button-icon -right">{iconRight}</span>}
    </Component>
  );
});

export default Button;

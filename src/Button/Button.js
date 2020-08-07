import React from 'react';
import cx from 'clsx';
import ButtonLoader from './ButtonLoader';

// TODO: forwardRef: https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/ButtonBase/ButtonBase.js

const Button = (props) => {
  const {
    children,
    className,
    type = 'button',
    color = 'primary',
    size,
    wide,
    disabled,
    loading,
    outline,
    iconLeft,
    iconRight,
    component = 'button',
    ...other
  } = props;

  const classNames = cx(className, 'button', `-${color}`, {
    '-wide': wide,
    '-medium': size === 'medium',
    '-small': size === 'small',
    '-loading': loading,
    '-outline': outline,
  });

  const isIconLeft = !loading && iconLeft;
  const isIconRight = !loading && iconRight;

  let Component = component;
  const componentProps = {};

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
    <Component className={classNames} {...componentProps} {...other}>
      {isIconLeft && <span className="button-icon -left">{iconLeft}</span>}
      {loading && <ButtonLoader />}
      {loading ? <span className="button-content">{children}</span> : children}
      {isIconRight && <span className="button-icon -right">{iconRight}</span>}
    </Component>
  );
};

export default Button;

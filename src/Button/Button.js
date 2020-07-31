import React from 'react';
import cx from 'clsx';
import ButtonLoader from './ButtonLoader';

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
    onClickHandler,
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

  return (
    <button type={type} className={classNames} disabled={disabled || loading} onClick={onClickHandler ? onClickHandler : null} {...other}>
      {isIconLeft && <span className="button-icon -left">{iconLeft}</span>}
      {loading && '\u00A0'}
      {loading && <ButtonLoader />}
      {!loading && children}
      {isIconRight && <span className="button-icon -right">{iconRight}</span>}
    </button>
  );
};

export default Button;

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
    href,
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
  const ButtonContent = () => (
    <>
      {isIconLeft && <span className="button-icon -left">{iconLeft}</span>}
      {loading && <ButtonLoader />}
      {loading ? <span className="button-content">{children}</span> : children}
      {isIconRight && <span className="button-icon -right">{iconRight}</span>}
    </>
  );

  return (
    href ? (
      <a href={href} className={classNames} {...other}>
        <ButtonContent />
      </a>
    ) : (
      <button type={type} className={classNames} disabled={disabled || loading} {...other}>
        <ButtonContent />
      </button>
    )
  );
};

export default Button;

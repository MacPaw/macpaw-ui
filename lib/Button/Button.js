import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx'
import ButtonLoader from './ButtonLoader';

const Button = (props) => {
  const { children, className, type, color, wide, disabled, loading, size, outline, ...other } = props;
  const classNames = cx(className, 'button', `-${color}`, {
      '-wide': wide,
      '-medium': size === 'medium',
      '-small': size === 'small',
      '-loading': loading,
      '-outline': outline,
    },
  );
  return (
    <button type={type} className={classNames} disabled={disabled || loading} {...other}>
      {loading && '\u00A0'}
      {loading && <ButtonLoader/>}
      {!loading && children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['medium', 'small']),
  disabled: PropTypes.bool,
  wide: PropTypes.bool,
  loading: PropTypes.bool,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  disabled: false,
  wide: false,
  loading: false,
  outline: false,
};


export default Button;
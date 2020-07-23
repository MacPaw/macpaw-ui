import React from 'react';
import cx from 'clsx';

const Hint = (props) => {
  const {
    large,
    children,
    error,
    ...other
  } = props;

  const hintClassName = cx('hint', {
    '-large': large,
    '-error': error,
  });

  return (
    <span className={hintClassName} {...other}>
      {children}
    </span>
  );
};

export default Hint;

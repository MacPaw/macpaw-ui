import React from 'react';
import cx from 'clsx';

const Hint = (props) => {
  const {
    large,
    children,
    error
  } = props;

  const hintClassName = cx('hint', {
    '-large': large,
    '-error': error
  });

  return (
    <span className={hintClassName}>
        {children}
    </span>
  );
};

export default Hint;

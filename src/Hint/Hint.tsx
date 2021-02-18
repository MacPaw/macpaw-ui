import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

interface HintProps extends HTMLAttributes<HTMLSpanElement> {
  large?: boolean;
  error?: boolean;
}

const Hint: FC<HintProps> = (props) => {
  const {
    large,
    children,
    error,
    className,
    ...other
  } = props;

  const hintClassName = cx('hint', className, {
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

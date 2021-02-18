import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

interface LabelProps extends HTMLAttributes<HTMLDivElement> {}

const Label: FC<LabelProps> = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('label', className)} {...other}>{children}</div>
  );
};

export default Label;

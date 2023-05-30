import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

export interface LabelProps extends HTMLAttributes<HTMLDivElement> {}

const Label: FC<React.PropsWithChildren<LabelProps>> = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('label', className)} {...other}>
      {children}
    </div>
  );
};

export default Label;

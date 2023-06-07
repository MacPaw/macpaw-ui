import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {}

const DialogContent: FC<React.PropsWithChildren<DialogContentProps>> = (props) => {
  const { children, className, ...other } = props;

  return (
    <div className={cx('dialogContent', className)} {...other}>
      {children}
    </div>
  );
};

export default DialogContent;

import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

export interface DialogActionsProps extends HTMLAttributes<HTMLDivElement> {
}

const DialogActions: FC<DialogActionsProps> = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('dialogActions', className)} {...other}>
      {children}
    </div>
  );
};

export default DialogActions;

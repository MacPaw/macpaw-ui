import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';
import DialogIconBackdrop from './DialogIconBackdrop';

interface DialogIconProps extends HTMLAttributes<HTMLDivElement> {}

const DialogIcon: FC<DialogIconProps> = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('dialogIcon', className)} {...other}>
      <DialogIconBackdrop className="dialogIcon-backdrop" />
      {children}
    </div>
  );
};

export default DialogIcon;

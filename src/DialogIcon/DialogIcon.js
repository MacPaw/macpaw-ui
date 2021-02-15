import React from 'react';
import cx from 'clsx';
import DialogIconBackdrop from './DialogIconBackdrop';

const DialogIcon = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('dialogIcon', className)} {...other}>
      <DialogIconBackdrop className="dialogIcon-backdrop" />
      {children}
    </div>
  );
};

export default DialogIcon;

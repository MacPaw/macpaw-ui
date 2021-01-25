import React from 'react';
import cx from 'clsx';

const DialogContent = (props) => {
  const { children, className, ...other } = props;

  return (
    <div className={cx('dialog-content', className)} {...other}>
      {children}
    </div>
  );
};

export default DialogContent;

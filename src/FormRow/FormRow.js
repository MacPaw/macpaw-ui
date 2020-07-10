import React from 'react';
import cx from 'clsx';

const FormRow = ({ className, children, ...other }) => (
  <div className={cx('form-row', className)} {...other}>
    {children}
  </div>
);

export default FormRow;

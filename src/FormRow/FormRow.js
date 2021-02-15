import React from 'react';
import cx from 'clsx';

const FormRow = (props) => {
  const {
    children,
    variety,
    className,
    ...other
  } = props;

  return (
    <div className={cx('formRow', variety && '-variety', className)} {...other}>
      {children}
    </div>
  );
};

export default FormRow;

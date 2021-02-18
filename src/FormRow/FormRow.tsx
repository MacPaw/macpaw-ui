import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

interface FormRowProps extends HTMLAttributes<HTMLDivElement> {
  variety?: boolean;
}

const FormRow: FC<FormRowProps> = (props) => {
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

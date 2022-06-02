import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

export interface FormRowProps extends HTMLAttributes<HTMLDivElement> {
  asList?: boolean;
  split?: boolean;
}

const FormRow: FC<React.PropsWithChildren<FormRowProps>> = (props) => {
  const {
    children,
    asList,
    split,
    className,
    ...other
  } = props;

  return (
    <div className={cx('formRow', asList && '-asList', split && '-split', className)} {...other}>
      {children}
    </div>
  );
};

export default FormRow;

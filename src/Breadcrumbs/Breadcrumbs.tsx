import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

export interface BreadcrumbsProps extends HTMLAttributes<HTMLUListElement> {
}

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { className, children, ...other } = props;

  return (
    <ul className={cx('breadcrumbs', className)} {...other}>
      {children}
    </ul>
  );
};

export default Breadcrumbs;

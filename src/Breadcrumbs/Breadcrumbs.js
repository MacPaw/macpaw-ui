import React from 'react';
import cx from 'clsx';

const Breadcrumbs = (props) => {
  const { className, children, ...other } = props;

  return (
    <ul className={cx('breadcrumbs', className)} {...other}>
      {children}
    </ul>
  );
};

export default Breadcrumbs;

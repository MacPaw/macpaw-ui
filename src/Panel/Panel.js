import React from 'react';
import cx from 'clsx';

const Panel = (props) => {
  const {
    className,
    outline,
    children,
    component = 'div',
    ...other
  } = props;

  const Component = other.href ? 'a' : component;

  return (
    <Component className={cx('panel', outline && '-outline', className)} {...other}>{children}</Component>
  );
};

export default Panel;

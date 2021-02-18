import React, { ElementType, FC, HTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';

interface PanelProps extends HTMLAttributes<HTMLElement & HTMLLinkElement> {
  outline?: boolean;
  href?: string;
  component?: ReactNode;
  [x:string]: any;
}

const Panel: FC<PanelProps> = (props) => {
  const {
    className,
    outline,
    children,
    component = 'div',
    ...other
  } = props;

  const Component = other.href ? 'a' : component as ElementType;

  return (
    <Component className={cx('panel', outline && '-outline', className)} {...other}>{children}</Component>
  );
};

export default Panel;
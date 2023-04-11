import cx from 'clsx';
import React, { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';

export interface DropdownItem extends ButtonHTMLAttributes<HTMLButtonElement> {
  component?: ReactNode;
  href?: string;
  attention?: boolean;
  withoutAction?: boolean;
  separator?: boolean;
  to?: string;
  onClick?: () => void | Promise<void>;
}

const DropdownItem: React.FC<React.PropsWithChildren<DropdownItem>> = (props) => {
  const {
    children,
    component = 'button',
    className, attention,
    withoutAction,
    separator,
    href,
    ...other } = props;

  let Component = component as ElementType;

  if (Component === 'button' && href) {
    Component = 'a';
  }

  if (withoutAction || separator) {
    Component = 'div';
  }

  const classNames = cx('dropdownItem', className, {
    '-attention': attention,
    '-clickable': !(separator || withoutAction),
    '-separator': separator,
  });

  return (
    <Component className={classNames} {...other}>
      {children}
    </Component>
  );
};

export default DropdownItem;

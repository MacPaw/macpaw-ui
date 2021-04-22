import cx from 'clsx';
import React, { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';

interface DropdownItem extends ButtonHTMLAttributes<HTMLButtonElement> {
  component?: ReactNode;
  href?: string;
  attention?: boolean;
  withoutAction?: boolean;
  separator?: boolean;
}

const DropdownItem: React.FC<DropdownItem> = (props) => {
  const { children, component = 'button', className, attention, withoutAction, separator, ...other } = props;

  let Component = component as ElementType;

  if (Component === 'button' && other.href) {
    Component = 'a';
  }

  if (separator) {
    Component = 'div';
  }

  const classNames = cx('dropdownItem', className, {
    '-attention': attention,
    '-clickable': !withoutAction,
    '-separator': separator,
  });

  return (
    <Component className={classNames} {...other}>
      {children}
    </Component>
  );
};

export default DropdownItem;

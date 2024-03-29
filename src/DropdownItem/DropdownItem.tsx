import React, { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';
import cx from 'clsx';

export interface DropdownItem extends ButtonHTMLAttributes<HTMLButtonElement> {
  component?: ReactNode;
  href?: string;
  attention?: boolean;
  withoutAction?: boolean;
  separator?: boolean;
  to?: string;
}

const DropdownItem: React.FC<React.PropsWithChildren<DropdownItem>> = (props) => {
  const { children, component = 'button', className, attention, withoutAction, separator, ...other } = props;

  let Component = component as ElementType;

  if (Component === 'button' && other?.href) Component = 'a';

  if (withoutAction || separator) Component = 'div';

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

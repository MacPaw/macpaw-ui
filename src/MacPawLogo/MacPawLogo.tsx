import React, { ElementType, FC, HTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';
import { MacpawText, PawIcon } from '../Icons/jsx';

export interface MacPawLogoProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  disableRotate?: boolean;
  component?: ReactNode | string;
  pawProps?: ObjectLiteral;
  textProps?: ObjectLiteral;
  inline?: boolean;
  href?: string;
  target?: string;
  to?: string;
}

const MacPawLogo: FC<React.PropsWithChildren<MacPawLogoProps>> = (props) => {
  const { pawProps, textProps, className = '', disableRotate = false, inline, component, ...rest } = props;

  const Component = (component as ElementType) || 'div';

  return (
    <Component
      className={cx('mac-paw-logo', className, {
        'mac-paw-logo_inline': inline,
      })}
      {...rest}
    >
      <PawIcon
        className={cx('mac-paw-logo__paw ', {
          'mac-paw-logo__paw_rotate': !disableRotate,
        })}
        {...pawProps}
      />
      <MacpawText className="mac-paw-logo__text" {...textProps} />
    </Component>
  );
};

export default MacPawLogo;

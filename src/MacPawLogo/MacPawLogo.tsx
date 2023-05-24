import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';
import { MacpawText, PawIcon } from '../Icons/jsx';

export interface MacPawLogoProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string;
  disableRotate?: boolean;
  pawProps?: { [key: string]: any};
  textProps?: { [key: string]: any};
  inline?: boolean;
}

const MacPawLogo: FC<React.PropsWithChildren<MacPawLogoProps>> = (props) => {
  const { pawProps, textProps, classNames = '', disableRotate = false, inline } = props;

  return (
    <div className={cx('mac-paw-logo', classNames, {
      'mac-paw-logo_inline': inline,
    })}
    >
      <PawIcon
        className={cx('mac-paw-logo__paw ', {
          'mac-paw-logo__paw_rotate': !disableRotate,
        })}
        {...pawProps}
      />
      <MacpawText {...textProps} />
    </div>
  );
};

export default MacPawLogo;

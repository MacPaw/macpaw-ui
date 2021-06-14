import React, { FC, HTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'secondary' | 'readonly';
  icon?: ReactNode;
  action?: ReactNode;
}

const Banner: FC<BannerProps> = (props) => {
  const {
    className,
    children,
    type,
    icon,
    action,
    ...other
  } = props;

  const classNames = cx('banner', className, {
    '-secondary': type === 'secondary',
    '-readonly': type === 'readonly',
  });

  return (
    <div className={classNames} {...other}>
      {icon && <div className="banner-icon">{icon}</div>}
      <div className="banner-content">{children}</div>
      {action && <div className="banner-action">{action}</div>}
    </div>
  );
};

export default Banner;

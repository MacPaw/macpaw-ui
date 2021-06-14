import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
}

const Badge: FC<BadgeProps> = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('badge', className)} {...other}>{children}</div>
  );
};

export default Badge;

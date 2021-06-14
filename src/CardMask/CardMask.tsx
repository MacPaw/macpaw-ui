import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

export interface CardMaskProps extends HTMLAttributes<HTMLDivElement> {
  digits?: string;
  short?: boolean;
}

const CardMask: FC<CardMaskProps> = (props) => {
  const { digits, short, className, ...other } = props;

  return (
    <div className={cx('cardMask', className)} {...other}>
      <span>●●●●</span>
      {!short && <span>●●●●</span>}
      {!short && <span>●●●●</span>}
      {digits || '●●●●'}
    </div>
  );
};

export default CardMask;

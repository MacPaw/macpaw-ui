import React from 'react';
import cx from 'clsx';

const CardMask = (props) => {
  const { digits, short, className } = props;

  return (
    <div className={cx('card-mask', className)}>
      <span>●●●●</span>
      {!short && <span>●●●●</span>}
      {!short && <span>●●●●</span>}
      {digits || '●●●●'}
    </div>
  );
};

export default CardMask;

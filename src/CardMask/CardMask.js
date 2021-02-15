import React from 'react';
import cx from 'clsx';

const CardMask = (props) => {
  const { digits, short, className } = props;

  return (
    <div className={cx('cardMask', className)}>
      <span>●●●●</span>
      {!short && <span>●●●●</span>}
      {!short && <span>●●●●</span>}
      {digits || '●●●●'}
    </div>
  );
};

export default CardMask;

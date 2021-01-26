import React from 'react';
import cx from 'clsx';
import CloseIcon from '../Icons/jsx/CloseIcon';

const Tag = (props) => {
  const { onRemove, className, children, ...other } = props;

  return (
    <div className={cx('tag', onRemove && 'tag-action', className)} {...other}>
      {onRemove && (
        <button onClick={onRemove}>
          <CloseIcon />
        </button>
      )}
      {children}
    </div>
  );
};

export default Tag;

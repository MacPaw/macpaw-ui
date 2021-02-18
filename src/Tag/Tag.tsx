import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';
import CloseIcon from '../Icons/jsx/CloseIcon';

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
}

const Tag: FC<TagProps> = (props) => {
  const { onRemove, className, children, ...other } = props;

  return (
    <div className={cx('tag', onRemove && 'tag-action', className)} {...other}>
      {onRemove && (
        <button type="button" onClick={onRemove}>
          <CloseIcon />
        </button>
      )}
      {children}
    </div>
  );
};

export default Tag;

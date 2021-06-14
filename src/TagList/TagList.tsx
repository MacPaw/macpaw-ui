import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

export interface TagListProps extends HTMLAttributes<HTMLDivElement> {
}

const TagList: FC<TagListProps> = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('tagList', className)} {...other}>
      {children}
    </div>
  );
};

export default TagList;

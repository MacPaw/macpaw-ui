import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

export interface TagListProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  as?: 'div' | 'span';
}

const TagList: FC<TagListProps> = ({ className, children, as: Element = 'div', ...other }) =>  (
  <Element className={cx('tagList', className)} {...other}>
    {children}
  </Element>
);

export default TagList;

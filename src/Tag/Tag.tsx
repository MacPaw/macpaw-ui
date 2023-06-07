import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';
import CloseIcon from '../Icons/jsx/CloseIcon';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'secondary' | 'warning' | 'custom';
  as?: 'div' | 'span';
  borderRadius?: string | number;
  onRemove?: () => void;
}

const Tag: FC<React.PropsWithChildren<TagProps>> = ({
  onRemove,
  className,
  borderRadius,
  color = 'secondary',
  as: Element = 'div',
  children,
  ...other
}) => {
  const tagClassNames = cx('tag', className, {
    [`-${color}`]: color,
    'tag-action': onRemove,
  });

  return (
    <Element className={tagClassNames} style={{ borderRadius }} {...other}>
      {onRemove && (
        <button type="button" onClick={onRemove}>
          <CloseIcon />
        </button>
      )}
      {children}
    </Element>
  );
};


export default Tag;

import React from 'react';
import cx from 'clsx';

const TagList = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('tagList', className)} {...other}>
      {children}
    </div>
  );
};

export default TagList;

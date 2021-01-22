import cx from 'clsx';

const Hint = (props) => {
  const {
    large,
    children,
    error,
    className,
    ...other
  } = props;

  const hintClassName = cx('hint', className, {
    '-large': large,
    '-error': error,
  });

  return (
    <span className={hintClassName} {...other}>
      {children}
    </span>
  );
};

export default Hint;

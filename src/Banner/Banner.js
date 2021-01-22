import cx from 'clsx';

const Banner = (props) => {
  const {
    className,
    children,
    type,
    icon,
    action,
    ...other
  } = props;

  const classNames = cx('banner', className, {
    '-secondary': type === 'secondary',
    '-readonly': type === 'readonly',
  });

  return (
    <div className={classNames} {...other}>
      {icon && <div className="banner-icon">{icon}</div>}
      <div className="banner-content">{children}</div>
      {action && <div className="banner-action">{action}</div>}
    </div>
  );
};

export default Banner;

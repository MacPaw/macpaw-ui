import cx from 'clsx';
import DialogIconBackdrop from './DialogIconBackdrop';

const DialogIcon = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cx('dialog-icon', className)} {...other}>
      <DialogIconBackdrop className="dialog-icon-backdrop" />
      {children}
    </div>
  );
};

export default DialogIcon;

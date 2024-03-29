import React, { FC, HTMLAttributes, useEffect } from 'react';
import cx from 'clsx';
import CloseIcon from '../Icons/jsx/CloseIcon';

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  withCloseButton?: boolean;
  onRequestClose: () => void;
}

const Dialog: FC<React.PropsWithChildren<DialogProps>> = (props) => {
  const {
    isOpen,
    shouldCloseOnEsc = true,
    shouldCloseOnOverlayClick = true,
    onRequestClose,
    withCloseButton = true,
    className,
    children,
    ...other
  } = props;

  const dialogClassName = cx('dialog', className);

  const keyListener = (event: KeyboardEvent) => {
    if (event.key === 'Escape') onRequestClose();
  };

  const overlayClickListener = () => {
    if (!shouldCloseOnOverlayClick) return;

    onRequestClose();
  };

  useEffect(() => {
    if (shouldCloseOnEsc) document.addEventListener('keydown', keyListener);

    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  }, [shouldCloseOnEsc]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isOpen) return null;

  return (
    <div className="dialog-root">
      <div className="dialog-overlay" onClick={overlayClickListener} tabIndex={-1} role="none" />
      <div className={dialogClassName} {...other}>
        {children}
        {withCloseButton && (
          <button className="dialog-close" onClick={onRequestClose}>
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Dialog;

import React, { useEffect } from 'react';
import cx from 'clsx';
import ModalBackdrop from './ModalBackdrop';
import CloseIcon from '../Icons/jsx/Close';

const Modal = (props) => {
  const {
    isOpen,
    shouldCloseOnEsc = true,
    shouldCloseOnOverlayClick = true,
    onRequestClose,
    withCloseButton = true,
    className,
    icon,
    actionsRight,
    actionsLeft,
    children,
    ...other
  } = props;

  const modalClassName = cx('modal', isOpen && '-in', className);

  function keyListener(event) {
    if (event.keyCode === 27) {
      onRequestClose();
    }
  }

  function overlayClickListener() {
    if (!shouldCloseOnOverlayClick) {
      return;
    }

    onRequestClose();
  }

  useEffect(() => {
    if (shouldCloseOnEsc) {
      document.addEventListener('keydown', keyListener);
    }
    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-root">
      <div className="modal-overlay" onClick={overlayClickListener} tabIndex={-1} role="none" />
      <div className={modalClassName} {...other}>
        <div className="modal-content">
          {icon && (
            <div className="modal-icon">
              <ModalBackdrop className="modal-backdrop" />
              {icon}
            </div>
          )}
          {withCloseButton && (
            <button className="modal-close" onClick={onRequestClose}>
              <CloseIcon />
            </button>
          )}
          {children}
        </div>
        <div className="modal-actions">
          {actionsLeft && (
            <div className="modal-actions-left">{actionsLeft}</div>
          )}
          {actionsRight && (
            <div className="modal-actions-right">{actionsRight}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

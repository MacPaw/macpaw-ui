import {FC, ReactNode, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  isOpen: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  withCloseButton?: boolean;
  onRequestClose: () => void;
  icon?: ReactNode;
  actionsRight?: ReactNode;
  actionsLeft?: ReactNode;
}

declare const Modal: FC<Props>;

export default Modal;
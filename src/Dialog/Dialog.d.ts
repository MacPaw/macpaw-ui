import {FC, ReactNode, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  isOpen: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  withCloseButton?: boolean;
  onRequestClose: () => void;
}

declare const Dialog: FC<Props>;

export default Dialog;
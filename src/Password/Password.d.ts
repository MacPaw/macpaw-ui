import {FC, ReactNode, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  onShowHide?: () => void | boolean;
  onForgot?: () => void;
  size?: 'medium' | 'small'
  label?: string | ReactNode;
  errorMessage?: string | ReactNode;
  i18nShow?: string;
  i18nHide?: string;
  i18nForgot?: string;
}

declare const Password: FC<Props>;

export default Password;

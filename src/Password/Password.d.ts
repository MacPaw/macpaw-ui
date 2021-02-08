import { FC, ReactNode, HTMLProps } from 'react';
import { Error } from '../types';

interface Props extends HTMLProps<HTMLInputElement> {
  onShowHide?: boolean | (() => void);
  onForgot?: () => void;
  size?: 'medium' | 'small'
  label?: string | ReactNode;
  error?: Error;
  i18nShow?: string;
  i18nHide?: string;
  i18nForgot?: string;
}

declare const Password: FC<Props>;

export default Password;

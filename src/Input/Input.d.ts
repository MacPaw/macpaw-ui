import {FC, ReactNode, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  size?: 'medium' | 'small';
  errorMessage?: string | ReactNode;
  action?: ReactNode;
  multiline?: boolean;
  label?: string | ReactNode;
  rows?: number;
}

declare const Input: FC<Props>;

export default Input;

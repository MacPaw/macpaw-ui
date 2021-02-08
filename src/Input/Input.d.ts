import { FC, ReactNode, HTMLProps } from 'react';
import { Error } from '../types';

interface Props extends HTMLProps<HTMLInputElement> {
  size?: 'medium' | 'small';
  error?: Error;
  action?: ReactNode;
  multiline?: boolean;
  label?: string | ReactNode;
  rows?: number;
}

declare const Input: FC<Props>;

export default Input;

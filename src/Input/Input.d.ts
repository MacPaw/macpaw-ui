import {FC, ReactNodeArray, ReactNode, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLInputElement & HTMLTextAreaElement> {
  size?: 'medium' | 'small'
  value?: string;
  placeholder?: string;
  errorMessage?: string | ReactNodeArray;
  disabled?: boolean;
  action?: ReactNode;
  multiline?: boolean;
  label?: string | ReactNodeArray;
}

declare const Input: FC<Props>;

export default Input;
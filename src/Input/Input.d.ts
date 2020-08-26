import {FC, ReactNodeArray, ReactNode, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLInputElement & HTMLTextAreaElement> {
  size?: 'medium' | 'small'
  value?: string;
  placeholder?: string;
  errorMessage?: string | ReactNodeArray;
  labelModifier?: string | boolean;
  disabled?: boolean;
  action?: ReactNode;
}

declare const Input: FC<Props>;

export default Input;
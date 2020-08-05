import {FC, ReactNodeArray, ChangeEvent} from 'react';

interface Props {
  name: string;
  className?: string;
  type: 'text' | 'email' | 'password';
  size?: 'medium' | 'small'
  value?: string;
  placeholder?: string;
  errorMessage?: string | ReactNodeArray;
  labelModifier?: string | boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

declare const Input: FC<Props>;

export default Input;
import {FC} from 'react';

interface Props {
  type: 'text' | 'email' | 'password';
  size?: 'large' | 'small'
  value?: string;
  name: string;
  placeholder?: string;
  errorMessage?: string | React.ReactNodeArray;
  labelModifier?: string | boolean;
  disabled?: boolean;
}

declare const Input: FC<Props>;

export default Input;
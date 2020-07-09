import React, {FC} from 'react';

interface Props {
  name: string;
  className?: string;
  type: 'text' | 'email' | 'password';
  size?: 'medium' | 'small'
  value?: string;
  placeholder?: string;
  errorMessage?: string | React.ReactNodeArray;
  labelModifier?: string | boolean;
  disabled?: boolean;
}

declare const Input: FC<Props>;

export default Input;
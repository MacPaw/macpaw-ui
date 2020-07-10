import {FC} from 'react';

interface Props {
  className?: string;
  large?: boolean;
  text: string;
  error?: boolean;
}

declare const Input: FC<Props>;

export default Input;
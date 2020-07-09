import {FC} from 'react';

interface Props {
  large?: boolean;
  text: string;
  error?: boolean;
}

declare const Input: FC<Props>;

export default Input;
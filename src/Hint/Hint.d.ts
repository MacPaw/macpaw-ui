import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  large?: boolean;
  text: string;
  error?: boolean;
}

declare const Input: FC<Props>;

export default Input;
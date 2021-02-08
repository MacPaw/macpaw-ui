import { FC, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
}

declare const Checkbox: FC<Props>;

export default Checkbox;

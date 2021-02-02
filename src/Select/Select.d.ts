import { FC, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLSelectElement> {
  selected?: string;
  disabled?: boolean;
  error?: string;
  size?: 'big';
}

declare const Select: FC<Props>;

export default Select;

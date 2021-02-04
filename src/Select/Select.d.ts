import { FC, ReactNode, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLSelectElement> {
  size?: 'medium' | 'small';
  selected?: string;
  disabled?: boolean;
  errorMessage?: string;
  label?: string | ReactNode;
}

declare const Select: FC<Props>;

export default Select;

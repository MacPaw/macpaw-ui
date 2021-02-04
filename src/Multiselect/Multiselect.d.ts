import { FC, ReactNode, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLElement> {
  placeholder?: string;
  size?: 'medium' | 'small';
  onChange?: (values: string[]) => void;
  errorMessage?: string;
  label?: string | ReactNode;
}

declare const Multiselect: FC<Props>;

export default Multiselect;

import { FC, ReactNode, HTMLProps } from 'react';
import { Error } from '../types';

interface Props extends HTMLProps<HTMLSelectElement> {
  size?: 'medium' | 'small';
  selected?: string;
  disabled?: boolean;
  error?: Error;
  label?: string | ReactNode;
}

declare const Select: FC<Props>;

export default Select;

import { FC, ReactNode, HTMLProps } from 'react';
import { Error } from '../types';

interface Props extends HTMLProps<HTMLElement> {
  placeholder?: string;
  size?: 'medium';
  onChange?: (values: string[]) => void;
  error?: Error;
  label?: string | ReactNode;
}

declare const Multiselect: FC<Props>;

export default Multiselect;

import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  placeholder?: string;
  onChange?: (values: string[]) => void;
  error?: string;
}

declare const Multiselect: FC<Props>;

export default Multiselect;

import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLSelectElement> {
  selected?: string;
  disabled?: boolean;
  error?: string;
}

declare const Select: FC<Props>;

export default Select;

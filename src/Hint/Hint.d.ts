import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  large?: boolean;
  error?: boolean;
}

declare const Hint: FC<Props>;

export default Hint;

import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  size?: number;
  inline?: boolean;
}

declare const Loader: FC<Props>;

export default Loader;
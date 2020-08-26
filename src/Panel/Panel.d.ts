import {FC, ReactNode, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement & HTMLLinkElement> {
  outline?: boolean;
  href?: string;
  component?: ReactNode;
  [x:string]: any;
}

declare const Panel: FC<Props>;

export default Panel;
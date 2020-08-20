import {FC, ReactNode} from 'react';

interface Props {
  className?: string;
  outline?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  component?: ReactNode;
  [x:string]: any;
}

declare const Panel: FC<Props>;

export default Panel;
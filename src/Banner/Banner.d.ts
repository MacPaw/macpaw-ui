import {FC, ReactNode, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  type?: 'secondary' | 'readonly';
  icon?: ReactNode;
  action?: ReactNode;
}

declare const Banner: FC<Props>;

export default Banner;
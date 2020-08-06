import {FC, ReactNode} from 'react';

interface Props {
  className?: string;
  type?: 'secondary' | 'readonly';
  icon?: ReactNode;
  action?: ReactNode;
}

declare const Banner: FC<Props>;

export default Banner;
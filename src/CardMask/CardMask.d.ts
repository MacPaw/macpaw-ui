import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  digits: number;
  short?: boolean;
}

declare const CardMask: FC<Props>;

export default CardMask;
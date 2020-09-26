import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  digits?: string;
  short?: boolean;
}

declare const CardMask: FC<Props>;

export default CardMask;
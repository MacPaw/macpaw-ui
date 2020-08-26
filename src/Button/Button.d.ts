import {FC, ReactNode, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary' | 'warning';
  size?: 'medium' | 'small';
  disabled?: boolean;
  wide?: boolean;
  loading?: boolean;
  outline?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
  href?: string;
  component?: ReactNode;
  [x:string]: any;
}

declare const Button: FC<Props>;

export default Button;
import {FC, ReactNode} from 'react';

interface Props {
  className?: string;
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
  target?: string;
  rel?: string;
  component?: ReactNode
  [x:string]: any;
}

declare const Button: FC<Props>;

export default Button;
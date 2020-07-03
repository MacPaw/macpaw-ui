import {FC} from 'react';

interface Props {
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary' | 'warning';
  size?: 'medium' | 'small';
  disabled?: boolean;
  wide?: boolean;
  loading?: boolean;
  outline?: boolean;
}

declare const Button: FC<Props>;

export default Button;
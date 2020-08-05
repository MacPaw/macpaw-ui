import {FC} from 'react';

interface Props {
  name?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
}

declare const Checkbox: FC<Props>;

export default Checkbox;
import {FC} from 'react';

interface Props {
  className?: string;
  selected?: string;
  disabled?: boolean;
  error?: boolean;
}

declare const Select: FC<Props>;

export default Select;
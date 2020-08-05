import {FC, ChangeEvent} from 'react';

interface Props {
  name?: string;
  className?: string;
  selected?: string;
  disabled?: boolean;
  error?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

declare const Select: FC<Props>;

export default Select;
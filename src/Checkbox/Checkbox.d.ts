import {FC, ChangeEvent} from 'react';

interface Props {
  name?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

declare const Checkbox: FC<Props>;

export default Checkbox;
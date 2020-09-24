import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  variety?: boolean;
}

declare const FormRow: FC<Props>;

export default FormRow;
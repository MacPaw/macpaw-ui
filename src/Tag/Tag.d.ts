import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLElement> {
  onRemove?: () => void;
}

declare const Tag: FC<Props>;

export default Tag;

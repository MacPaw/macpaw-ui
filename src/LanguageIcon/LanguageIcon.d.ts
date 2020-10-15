import {FC, HTMLProps} from 'react';
import {Language} from '../types';

interface Props extends HTMLProps<SVGElement> {
  language?: Language;
}

declare const LanguageIcon: FC<Props>;

export default LanguageIcon;

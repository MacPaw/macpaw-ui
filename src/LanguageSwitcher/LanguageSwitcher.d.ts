import {FC, ReactNode, HTMLProps} from 'react';
import {Language} from '../types';

interface Props extends HTMLProps<HTMLSelectElement> {
  currentLanguage: Language;
  availableLanguages: Language[];
}

declare const Input: FC<Props>;

export default Input;

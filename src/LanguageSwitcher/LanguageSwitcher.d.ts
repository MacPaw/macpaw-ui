import {FC, HTMLProps} from 'react';
import {Language} from '../types';

interface Props extends HTMLProps<HTMLSelectElement> {
  currentLanguage: Language;
  availableLanguages: Language[];
}

declare const LanguageSwitcher: FC<Props>;

export default LanguageSwitcher;

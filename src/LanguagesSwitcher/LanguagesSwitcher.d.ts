import {FC, ReactNode, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  currentLanguage: [{icon: ReactNode, languageName: string, languageCode: string}];
  languages: [{languageName: string, languageCode: string}];
  arrow: ReactNode;
}

declare const Input: FC<Props>;

export default Input;
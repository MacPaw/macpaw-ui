import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';
import DropdownIcon from '../Icons/jsx/DropdownIcon';
import LanguageIcon from '../LanguageIcon/LanguageIcon';

const LocaleNames = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  nl: 'Dutch',
  pl: 'Polski',
  pt: 'Português do Brasil',
  tr: 'Turkish',
  uk: 'Українська',
  zh: '繁體中文',
};

export type SupportedLocale = keyof typeof LocaleNames;

const getLocaleName = (locale: SupportedLocale) => {
  return LocaleNames[locale] || '';
};

export interface LanguageSwitcherProps extends HTMLAttributes<HTMLSelectElement> {
  currentLanguage: SupportedLocale;
  availableLanguages: SupportedLocale[];
}

const LanguageSwitcher: FC<React.PropsWithChildren<LanguageSwitcherProps>> = (props) => {
  const { currentLanguage, availableLanguages, className, ...other } = props;

  return (
    <div className={cx('languageSwitcher', className)}>
      <LanguageIcon language={currentLanguage} className="languageSwitcher-icon" />
      <div className="languageSwitcher-name">{getLocaleName(currentLanguage)}</div>
      <DropdownIcon className="languageSwitcher-arrow" />
      <label>
        <select value={currentLanguage} {...other}>
          {availableLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {getLocaleName(lang)}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default LanguageSwitcher;

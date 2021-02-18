import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';
import LanguageIcon from '../LanguageIcon/LanguageIcon';
import DropdownIcon from '../Icons/jsx/DropdownIcon';

const getLocaleName = (locale: string) => {
  switch (locale) {
    case 'en':
      return 'English';
    case 'de':
      return 'Deutsch';
    case 'es':
      return 'Español';
    case 'fr':
      return 'Français';
    case 'it':
      return 'Italiano';
    case 'ja':
      return '日本語';
    case 'ko':
      return '한국어';
    case 'nl':
      return 'Dutch';
    case 'pl':
      return 'Polski';
    case 'pt':
      return 'Português do Brasil';
    case 'ru':
      return 'Русский';
    case 'tr':
      return 'Turkish';
    case 'uk':
      return 'Українська';
    case 'zh':
      return '繁體中文';
    default:
      return '';
  }
};

interface LanguageSwitcherProps extends HTMLAttributes<HTMLSelectElement> {
  currentLanguage: string;
  availableLanguages: string[];
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const {
    currentLanguage,
    availableLanguages,
    className,
    ...other
  } = props;

  return (
    <div className={cx('languageSwitcher', className)}>
      <LanguageIcon language={currentLanguage} className="languageSwitcher-icon" />
      <div className="languageSwitcher-name">
        {getLocaleName(currentLanguage)}
      </div>
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

import React from 'react';
import LanguageIcon from '../LanguageIcon/LanguageIcon';
import DropdownIcon from '../Icons/jsx/DropdownIcon';

const getLocaleName = (locale) => {
  switch (locale) {
    case 'en':
      return 'English';
    case 'de':
      return 'Deutsch';
    case 'es':
      return 'Español';
    case 'fr':
      return 'Français';
    case 'ja':
      return '日本語';
    case 'ko':
      return '한국어';
    case 'lv':
      return 'Latvian';
    case 'nl':
      return 'Dutch';
    case 'pl':
      return 'Polski';
    case 'pt':
      return 'Português do Brasil';
    case 'ru':
      return 'Русский';
    case 'sv':
      return 'Swedish';
    case 'uk':
      return 'Українська';
    case 'zh':
      return '繁體中文';
    default:
      return '';
  }
};

const LanguageSwitcher = (props) => {
  const { currentLanguage, availableLanguages, ...other } = props;

  return (
    <div className="languageSwitcher">
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

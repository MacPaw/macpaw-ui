import React from 'react';

const LanguagesSwitcher = (props) => {
  const {
    currentLanguage,
    languages,
    arrow,
    ...other
  } = props;

  return (
    <div className="lang" {...other}>
      <div className="lang-switcher">
        <div className="lang-selected" data-switcher-view>
          <span className="icon">{currentLanguage.icon}</span>
          <span className="lang-name">{currentLanguage.languageName}</span>
          <span className="arrow">{arrow}</span>
        </div>
        <label>
          <select>
            {
              languages.map((item, i) => {
                return <option key={i} value={item.languageCode} defaultValue={item.languageCode === currentLanguage.languageCode}>{item.languageName}</option>
              })
            }
          </select>
        </label>
      </div>
    </div>
  );
};

export default LanguagesSwitcher;
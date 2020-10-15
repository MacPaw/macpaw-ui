import React from 'react';
import LanguageDe from '../Icons/jsx/LanguageDe';
import LanguageEn from '../Icons/jsx/LanguageEn';
import LanguageEs from '../Icons/jsx/LanguageEs';
import LanguageFr from '../Icons/jsx/LanguageFr';
import LanguageJa from '../Icons/jsx/LanguageJa';
import LanguageKo from '../Icons/jsx/LanguageKo';
import LanguageLv from '../Icons/jsx/LanguageLv';
import LanguageNl from '../Icons/jsx/LanguageNl';
import LanguagePl from '../Icons/jsx/LanguagePl';
import LanguagePt from '../Icons/jsx/LanguagePt';
import LanguageSv from '../Icons/jsx/LanguageSv';
import LanguageUk from '../Icons/jsx/LanguageUk';
import LanguageRu from '../Icons/jsx/LanguageRu';
import LanguageZh from '../Icons/jsx/LanguageZh';

const LanguageIcon = (props) => {
  const { language, ...other } = props;

  switch (language) {
    case 'en':
      return <LanguageEn {...other} />;
    case 'de':
      return <LanguageDe {...other} />;
    case 'es':
      return <LanguageEs {...other} />;
    case 'fr':
      return <LanguageFr {...other} />;
    case 'ja':
      return <LanguageJa {...other} />;
    case 'ko':
      return <LanguageKo {...other} />;
    case 'lv':
      return <LanguageLv {...other} />;
    case 'nl':
      return <LanguageNl {...other} />;
    case 'pl':
      return <LanguagePl {...other} />;
    case 'pt':
      return <LanguagePt {...other} />;
    case 'ru':
      return <LanguageRu {...other} />;
    case 'sv':
      return <LanguageSv {...other} />;
    case 'uk':
      return <LanguageUk {...other} />;
    case 'zh':
      return <LanguageZh {...other} />;
    default:
      return <LanguageEn {...other} />;
  }
};

export default LanguageIcon;

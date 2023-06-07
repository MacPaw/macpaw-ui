import React, { FC, HTMLAttributes } from 'react';
import LanguageDe from '../Icons/jsx/LanguageDe';
import LanguageEn from '../Icons/jsx/LanguageEn';
import LanguageEs from '../Icons/jsx/LanguageEs';
import LanguageFr from '../Icons/jsx/LanguageFr';
import LanguageIt from '../Icons/jsx/LanguageIt';
import LanguageJa from '../Icons/jsx/LanguageJa';
import LanguageKo from '../Icons/jsx/LanguageKo';
import LanguageNl from '../Icons/jsx/LanguageNl';
import LanguagePl from '../Icons/jsx/LanguagePl';
import LanguagePt from '../Icons/jsx/LanguagePt';
import LanguageTr from '../Icons/jsx/LanguageTr';
import LanguageUk from '../Icons/jsx/LanguageUk';
import LanguageZh from '../Icons/jsx/LanguageZh';

const LanguageIcons = {
  en: LanguageEn,
  de: LanguageDe,
  es: LanguageEs,
  fr: LanguageFr,
  it: LanguageIt,
  ja: LanguageJa,
  ko: LanguageKo,
  nl: LanguageNl,
  pl: LanguagePl,
  pt: LanguagePt,
  tr: LanguageTr,
  uk: LanguageUk,
  zh: LanguageZh,
};

export interface LanguageIconProps extends HTMLAttributes<SVGElement> {
  language?: keyof typeof LanguageIcons;
}

const LanguageIcon: FC<React.PropsWithChildren<LanguageIconProps>> = (props) => {
  const { language, ...other } = props;

  const Component = language ? LanguageIcons[language] : LanguageEn;

  return <Component {...other} />;
};

export default LanguageIcon;

import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const pages = [
  'accordion',
  'banner',
  'breadcrumbs',
  'button',
  'card-mask',
  'checkbox',
  'colors',
  'dialog',
  'dropdown',
  'grid',
  'icons',
  'input',
  'language-switcher',
  'loader',
  'notification',
  'pagination',
  'panel',
  'payment',
  'radio',
  'select',
  'switch',
  'tag',
  'tag-input',
  'table',
  'tooltip',
  'typography',
];

const Navigation = () => (
  <div className={styles.navigation}>
    <div className={styles.projectName}>MacPaw UI Kit</div>
    <div className={styles.navigationLinks}>
      {pages.sort().map((link) => (
        <Link href={`/${link}/`} key={link}>
          <a className={styles.navigationLink}>{link.replace('-', ' ')}</a>
        </Link>
      ))}
    </div>
  </div>
);

export default Navigation;

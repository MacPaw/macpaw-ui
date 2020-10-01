import React from 'react';
import Link from 'next/link'
import styles from './Navigation.module.css';

const pages = [
  'badge',
  'banner',
  'breadcrumbs',
  'button',
  'card-mask',
  'checkbox',
  'colors',
  'dialog',
  'icons',
  'input',
  'loader',
  'panel',
  'payment',
  'radio',
  'select',
  'table',
  'typography',
]

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
import React from 'react';
import Link from 'next/link'
import styles from './Navigation.module.css';

const pages = [
  'badge',
  'banner',
  'breadcrumbs',
  'button',
  'checkbox',
  'colors',
  'dialog',
  'input',
  'loader',
  'panel',
  'payment',
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
          <a className={styles.navigationLink}>{link}</a>
        </Link>
      ))}
    </div>
  </div>
);

export default Navigation;
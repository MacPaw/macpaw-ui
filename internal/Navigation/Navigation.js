import Link from 'next/link'
import styles from './Navigation.module.css';

export default () => (
  <div className={styles.navigation}>
    <div className={styles.name}>MacPaw UI Kit</div>
    <div className={styles.links}>
      <Link href="/colors">
        Colors
      </Link>
      <Link href="/typography">
        Typography
      </Link>
      <Link href="/button">
        Button
      </Link>
      <Link href="/loader">
        Loader
      </Link>
      <Link href="/input">
        Input
      </Link>
      <Link href="/checkbox">
        Checkbox
      </Link>
      <Link href="/select">
        Select
      </Link>
      <Link href="/breadcrumbs">
        Breadcrumbs
      </Link>
      <Link href="/badge">
        Badge
      </Link>
      <Link href="/panel">
        Panel
      </Link>
      <Link href="/table">
        Table
      </Link>
    </div>
  </div>
);
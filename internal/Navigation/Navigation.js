import Link from 'next/link'
import styles from './Navigation.module.css';

export default () => (
  <div className={styles.navigation}>
    <div className={styles.name}>MacPaw UI Kit</div>
    <div className={styles.links}>
      <Link href="/colors">
        <a>Colors</a>
      </Link>
      <Link href="/typography">
        <a>Typography</a>
      </Link>
      <Link href="/button">
        <a>Button</a>
      </Link>
      <Link href="/loader">
        <a>Loader</a>
      </Link>
      <Link href="/input">
        <a>Input</a>
      </Link>
      <Link href="/checkbox">
        <a>Checkbox</a>
      </Link>
      <Link href="/select">
        <a>Select</a>
      </Link>
      <Link href="/breadcrumbs">
        <a>Breadcrumbs</a>
      </Link>
      <Link href="/badge">
        <a>Badge</a>
      </Link>
      <Link href="/panel">
        <a>Panel</a>
      </Link>
    </div>
  </div>
);
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
      <Link href="/buttons">
        <a>Buttons</a>
      </Link>
      <Link href="/loaders">
        <a>Loaders</a>
      </Link>
    </div>
  </div>
);
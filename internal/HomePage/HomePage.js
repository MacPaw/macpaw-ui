import styles from './homePage.module.css';
import Button from '../../src/Button/Button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h2 className={styles.title}>MacPaw UI</h2>
          <span className={styles.description}>
            With MacPaw's UI Library, you're not just building interfaces;
            you're crafting experiences.
          </span>
          <div className={styles.buttons}>
            <Link href="/docs">
              <Button color="contrast">Read Docs</Button>
            </Link>
            <Link href="https://github.com/MacPaw/macpaw-ui" target="_blank">
              <Button
                iconRight={
                  <img
                    src="/github.svg"
                    width={25}
                    height={25}
                    alt="Github icon"
                  />
                }
              >
                Github
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

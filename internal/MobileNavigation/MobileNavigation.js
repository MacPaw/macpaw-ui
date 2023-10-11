import { Dropdown, DropdownItem, Button, MacPawLogo } from '../../src/ui';
import styles from './mobileNavigation.module.css';
import Link from 'next/link';
import { pages } from '../config/pages';
import ActiveLink from '../ActiveLink/ActiveLink';

const MobileNavigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <MacPawLogo />
          </a>
        </Link>
      </div>
      <Dropdown
        trigger={
          <Button icon color="transparent">
            <img src="/menu.svg" width={25} height={25} alt="Menu Icon" />
          </Button>
        }
        position="right"
        className={styles.dropdown}
      >
        <DropdownItem>
          <ActiveLink
            href="/docs"
            className={styles.navigationLink}
            activeClassName={styles.activeLink}
          >
            Installation
          </ActiveLink>
        </DropdownItem>
        {pages.map((link) => (
          <DropdownItem key={link}>
            <ActiveLink
              href={`/docs/${link}`}
              className={styles.navigationLink}
              activeClassName={styles.activeLink}
            >
              {link.replace('-', ' ')}
            </ActiveLink>
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
};

export default MobileNavigation;

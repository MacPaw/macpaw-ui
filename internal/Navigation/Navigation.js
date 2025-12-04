import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { pages } from "../config/pages";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link href="/" className={styles.projectLink}>
        MacPaw UI Kit
      </Link>
      <div className={styles.navigationLinks}>
        <ActiveLink
          href={"/docs"}
          className={styles.navigationLink}
          activeClassName={styles.activeLink}
        >
          Installation
        </ActiveLink>
        {[...pages].sort().map((link) => (
          <ActiveLink
            href={`/docs/${link}`}
            className={styles.navigationLink}
            activeClassName={styles.activeLink}
            key={link}
          >
            {link.replaceAll("-", " ")}
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from '../CodeBlock/CodeBlock';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';

const components = {
  p: (props) => <p className={styles.paragraph} {...props} />,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Navigation/>
    <div className={styles.content}>
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
    </div>
  </div>
);

export default Layout;

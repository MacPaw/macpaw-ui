import {MDXProvider} from '@mdx-js/react'
import CodeBlock from '../CodeBlock/CodeBlock';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

export default ({ children }) => (
  <div className={styles.layout}>
    <Navigation/>
    <div className={styles.content}>
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
    </div>
  </div>
);
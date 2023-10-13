import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

const ActiveLink = ({ children, className, activeClassName, ...props }) => {
  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(props.as || props.href, location.href)
        .pathname;

      const activePathname = new URL(asPath, location.href).pathname.replace(
        /\/$/,
        ''
      );

      const newClassName = clsx(className, {
        [activeClassName]: linkPathname === activePathname,
      });

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [asPath, isReady, props.as, props.href, computedClassName]);

  return (
    <Link {...props} className={computedClassName}>
      {children}
    </Link>
  );
};

export default ActiveLink;

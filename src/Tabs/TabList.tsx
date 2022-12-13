import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface TabListProps extends Omit<HTMLAttributes<HTMLDivElement>, 'role'> {}

const TabList: React.FC<PropsWithChildren<TabListProps> > = ({ children, ...restProps }) => (
  <div role="tablist" {...restProps}>
    {children}
  </div>
);

export default TabList;

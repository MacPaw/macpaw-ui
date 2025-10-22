/* eslint-disable react-hooks/exhaustive-deps */
import React, { HTMLAttributes, PropsWithChildren, useEffect } from 'react';
import { DEFAULT_TAB_TYPE } from './Tab';
import { useTabsContext } from './TabContext';

interface TabListProps extends Omit<HTMLAttributes<HTMLDivElement>, 'role'> {}

const TabList: React.FC<PropsWithChildren<TabListProps>> = ({ children, ...restProps }) => {
  const { activeTab, onSelectTab } = useTabsContext();

  useEffect(() => {
    if (activeTab) return;

    const [firstTab] = React.Children.toArray(children);

    if (!React.isValidElement(firstTab)) {
      throw new Error('TabList must have only Tab component as a child.');
    }

    const props = firstTab.props as { __TYPE?: string; tab: string };

    if (props.__TYPE !== DEFAULT_TAB_TYPE) {
      throw new Error('TabList must have only Tab component as a child.');
    }

    onSelectTab(props.tab);
  }, [children, activeTab]);

  return (
    <div role="tablist" {...restProps}>
      {children}
    </div>
  );
};

export default TabList;

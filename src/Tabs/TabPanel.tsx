import React from 'react';
import { useTabsContext } from './TabContext';

type TabPanelProps = {
  children: React.ReactNode;
  tab: number | string;
};

const TabPanel: React.FC<TabPanelProps> = ({ children, tab }) => {
  const { activeTab } = useTabsContext();

  return (activeTab === tab && children) as JSX.Element;
};

export default TabPanel;

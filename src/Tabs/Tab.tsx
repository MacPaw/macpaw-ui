import React, { PropsWithChildren } from 'react';
import cx from 'clsx';
import Button from '../Button/Button';
import { useTabsContext } from './TabContext';

interface TabProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'role' | 'color'> {
  tab: string;
  activeClassName?: string;
}

const Tab: React.FC<PropsWithChildren<TabProps>> = ({ children, tab, className, activeClassName = '', ...restProps }) => {
  const { activeTab, onSelectTab, color, activeColor } = useTabsContext();

  const isActive = tab === activeTab;

  const tabClassName = cx(className, {
    [activeClassName]: isActive,
  });

  const buttonColor = isActive ? activeColor : color;

  const handleSelectTab = (): void => onSelectTab(tab);

  return (
    <Button
      color={buttonColor}
      className={tabClassName}
      onClick={handleSelectTab}
      role="tab"
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default Tab;

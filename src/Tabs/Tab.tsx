import React, { useEffect, PropsWithChildren } from 'react';
import cx from 'clsx';
import Button from '../Button/Button';
import { useTabsContext } from './TabContext';

export const DEFAULT_TAB_TYPE = 'Tab';

export interface TabProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'role' | 'color'> {
  tab: string;
  activeClassName?: string;
  __TYPE?: typeof DEFAULT_TAB_TYPE;
}

const Tab: React.FC<PropsWithChildren<TabProps>> = ({
  children,
  tab,
  className,
  activeClassName = '',
  __TYPE,
  ...restProps
}) => {
  const { activeTab, onSelectTab, color, activeColor, scale } = useTabsContext();

  const isActive = tab === activeTab;

  const tabClassName = cx(className, {
    [activeClassName]: isActive,
  });

  const buttonColor = isActive ? activeColor : color;

  const handleSelectTab = (): void => onSelectTab(tab);

  useEffect(() => {
    if (__TYPE !== DEFAULT_TAB_TYPE) throw new Error('You may NOT pass in a prop value for __TYPE.');
  }, [__TYPE]);

  return (
    <Button
      color={buttonColor}
      className={tabClassName}
      onClick={handleSelectTab}
      role="tab"
      scale={scale}
      {...restProps}
    >
      {children}
    </Button>
  );
};

Tab.defaultProps = {
  __TYPE: DEFAULT_TAB_TYPE,
};

export default Tab;

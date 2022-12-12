/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext, MutableRefObject, PropsWithChildren, useContext } from 'react';
import { ButtonColor } from '../Button/Button';

export interface TabsContextValue {
  activeTab: string;
  initialTab?: string;
  color: ButtonColor;
  activeColor: ButtonColor;
  scale?: 'medium' | 'small';
  outline?: boolean;
  onSelectTab: (tab: string) => void;
}

const initialContextValue = {
  activeTab: '',
  initialTab: '',
  color: 'transparent',
  activeColor: 'secondary',
  onSelectTab: (): void => {},
};

export const TabsContext = createContext<TabsContextValue>(initialContextValue as TabsContextValue);

export const useTabsContext = (): TabsContextValue => useContext(TabsContext);

interface TabProviderProps extends Omit<Partial<TabsContextValue>, 'activeTab'|'activeTab'> {
  activeTab: string;
  innerRef?: MutableRefObject<TabsContextValue | null>;
}

export const TabsProvider: React.FC<PropsWithChildren<TabProviderProps>> = ({
  children,
  initialTab,
  color = 'transparent',
  activeColor = 'secondary',
  scale,
  outline,
  innerRef,
  onSelectTab = (): void => {},
}) => {
  const [activeTab, setActiveTab] = useState(initialTab || '');

  const handleSelectTab = (tab: string): void => {
    onSelectTab(tab);
    if (tab !== activeTab) setActiveTab(tab);
  };

  const providerValue = {
    activeTab,
    onSelectTab: handleSelectTab,
    color,
    activeColor,
    scale,
    outline,
  };

  useEffect(() => {
    if (!innerRef) return;

    innerRef.current = providerValue;
  }, [providerValue]);

  return (
    <TabsContext.Provider value={providerValue}>
      {children}
    </TabsContext.Provider>
  );
};


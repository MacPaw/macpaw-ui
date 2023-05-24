import React, { useState } from 'react';
import AccordionContext from './AccordionContext';

interface Accordion {
  onChange?: (activeKey: string | null) => void;
}

const Accordion: React.FC<React.PropsWithChildren<Accordion>> = (props) => {
  const { children, onChange } = props;
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const onToggle = (key: string | null) => {
    setActiveKey(key);
    if (onChange)
      onChange(key);
  };

  return <AccordionContext.Provider value={{ activeKey, onToggle }}>{children}</AccordionContext.Provider>;
};

export default Accordion;

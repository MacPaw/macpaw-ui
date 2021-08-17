import { createContext } from 'react';

interface AccordionContextInterface {
  activeKey: null | string;
  onToggle: (activeKey: string | null) => void;
}

export default createContext<AccordionContextInterface>({
  activeKey: null,
  onToggle: () => {},
});

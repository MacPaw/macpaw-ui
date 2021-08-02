import React, { HTMLAttributes, useContext } from 'react';
import AccordionContext from './AccordionContext';

export interface AccordionTrigger extends HTMLAttributes<HTMLDivElement> {
  sectionKey: string;
  onClick?: (event: React.SyntheticEvent) => void;
}

const AccordionTrigger: React.FC<AccordionTrigger> = (props) => {
  const { children, sectionKey, onClick, ...other } = props;
  const { activeKey, onToggle } = useContext(AccordionContext);
  const onTrigger = (event: React.SyntheticEvent) => {
    onToggle(sectionKey === activeKey ? null : sectionKey);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onTrigger}
      onKeyPress={(event: React.KeyboardEvent) => {
        if (event.which === 13) {
          onTrigger(event);
        }
      }}
      {...other}
    >
      {children}
    </div>
  );
};

export default AccordionTrigger;

import React, { useContext, useState, useRef, useEffect, CSSProperties, HTMLAttributes } from 'react';
import { Transition } from 'react-transition-group';
import AccordionContext from './AccordionContext';

export interface AccordionCollapsible extends HTMLAttributes<HTMLDivElement> {
  sectionKey: string;
}

const TIMEOUT = 20;

const AccordionCollapsible: React.FC<React.PropsWithChildren<AccordionCollapsible>> = (props) => {
  const timeout = 300;
  const { sectionKey, children, ...other } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const { activeKey } = useContext(AccordionContext);

  useEffect(() => {
    setIsExpanded(activeKey === sectionKey);
  }, [sectionKey, activeKey]);

  const baseStyles: CSSProperties = {
    height: 0,
    overflow: 'hidden',
    visibility: 'hidden',
    position: 'relative',
    transition: `${timeout}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  };

  const onEnter = () => {
    if (nodeRef.current) {
      nodeRef.current.style.height = `${0}px`;
      nodeRef.current.style.visibility = 'visible';
    }
  };

  const onEntering = () => {
    if (nodeRef.current) nodeRef.current.style.height = `${nodeRef.current.scrollHeight}px`;
  };

  const onEntered = () => {
    if (nodeRef.current) {
      nodeRef.current.style.height = 'auto';
      nodeRef.current.style.overflow = 'visible';
    }
  };

  const onExit = () => {
    if (nodeRef.current) {
      nodeRef.current.style.overflow = 'hidden';
      nodeRef.current.style.height = `${nodeRef.current.clientHeight}px`;
    }
  };

  const onExiting = () => {
    setTimeout(() => {
      if (nodeRef.current) nodeRef.current.style.height = `${0}px`;
    }, TIMEOUT);
  };

  const onExited = () => {
    if (nodeRef.current) nodeRef.current.style.visibility = 'hidden';
  };

  return (
    <Transition
      in={isExpanded}
      timeout={timeout}
      nodeRef={nodeRef}
      onEnter={onEnter}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      <div ref={nodeRef} style={baseStyles} {...other}>
        {children}
      </div>
    </Transition>
  );
};

export default AccordionCollapsible;

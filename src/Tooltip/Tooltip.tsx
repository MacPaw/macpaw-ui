import React, { useEffect, useRef, useState } from 'react';
import { FloatingArrow, Placement } from '@floating-ui/react';
import cx from 'clsx';
import useTooltip from './useTooltip.hook';

interface Tooltip {
  content: React.ReactNode;
  position: Placement;
  maxWidth?: number | string;
  forceShow?: boolean;
  forceHide?: boolean;
  openOnClick?: boolean;
}

const Tooltip: React.FC<React.PropsWithChildren<Tooltip>> = ({
  children,
  content,
  position,
  maxWidth,
  forceShow,
  forceHide,
  openOnClick = false,
}) => {
  const messageStyles = maxWidth ? ({ width: maxWidth, maxWidth } as React.CSSProperties) : {};

  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const { setReference, setFloating, getReferenceProps, getFloatingProps, getArrowPosition, floatingStyles, context } =
    useTooltip({ isForce: Boolean(forceShow || forceHide), arrowRef, openOnClick, position, isOpen, setIsOpen });

  useEffect(() => {
    setIsOpen(Boolean(forceShow && !forceHide));
  }, [forceShow, forceHide]);

  return (
    <>
      <div className="tooltip-trigger" ref={setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isOpen && (
        <div ref={setFloating} className="tooltip" style={floatingStyles}>
          <FloatingArrow
            ref={arrowRef}
            context={context}
            tipRadius={2}
            height={9}
            width={18}
            staticOffset={getArrowPosition}
          />
          <div
            className={cx('tooltip-content tooltip-message', {
              '-custom-width': !!maxWidth,
            })}
            style={messageStyles}
            {...getFloatingProps()}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default Tooltip;

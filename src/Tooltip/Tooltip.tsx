import React, { useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  limitShift,
  useFocus,
  useClick,
  useHover,
  useInteractions,
  useTransitionStyles,
  FloatingArrow,
  arrow,
  safePolygon,
} from '@floating-ui/react';

interface Tooltip {
  content: React.ReactNode;
  position: 'top' | 'bottom' | 'left' | 'right';
  maxWidth?: number | string;
  forceShow?: boolean;
  forceHide?: boolean;
  openOnСlick?: boolean;
}

const Tooltip: React.FC<React.PropsWithChildren<Tooltip>> = ({
  children,
  content,
  position,
  maxWidth,
  forceShow,
  forceHide,
  openOnСlick,
}) => {
  const messageStyles = maxWidth
    ? ({ width: maxWidth } as React.CSSProperties)
    : {};

  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(Boolean(forceShow && !forceHide));
  }, [forceShow, forceHide]);

  const { middlewareData, refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: forceShow || forceHide ? undefined : setIsOpen,
    placement: position,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      arrow({
        element: arrowRef,
      }),
      flip(),
      shift({
        limiter: limitShift(),
      }),
    ],
  });

  const { styles } = useTransitionStyles(context, {
    duration: 400,
  });

  const getArrowPosition = () => {
    const shiftPosition
      = middlewareData?.shift?.y || middlewareData?.shift?.x || 0;
    const arrowPosition
      = middlewareData?.arrow?.y || middlewareData?.arrow?.x || 0;
    const coordinates = arrowPosition - shiftPosition;

    const overflowSize = (arrowPosition * 2) / shiftPosition;

    const positionOnOverflow = `${middlewareData?.shift?.x ? '85' : '59'}%`;

    return coordinates < 10
      ? 10
      : middlewareData?.flip?.overflows?.[0]
        && overflowSize > -3
        && shiftPosition < 0
        ? positionOnOverflow
        : coordinates;
  };

  const hover = useHover(context, {
    enabled: !openOnСlick,
    handleClose: safePolygon({
      requireIntent: false,
    }),
  });
  const focus = useFocus(context);
  const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    openOnСlick ? click : undefined,
  ]);

  return (
    <>
      <div
        className="tooltip-trigger"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {children}
      </div>
      {isOpen && (
        <div ref={refs.setFloating} style={{ ...floatingStyles, ...styles }}>
          <FloatingArrow
            ref={arrowRef}
            context={context}
            tipRadius={2}
            height={9}
            width={18}
            staticOffset={getArrowPosition()}
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

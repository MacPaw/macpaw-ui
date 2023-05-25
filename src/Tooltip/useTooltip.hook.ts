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
  arrow,
  safePolygon,
  Placement,
} from '@floating-ui/react';
import { useMemo } from 'react';

interface useTooltip {
  isForce: boolean;
  arrowRef: React.MutableRefObject<null>;
  openOnСlick: boolean;
  position: Placement;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const useTooltip = ({ isForce, arrowRef, openOnСlick, position, isOpen, setIsOpen }: useTooltip) => {

  const { middlewareData, refs: { setReference, setFloating }, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: isForce ? undefined : setIsOpen,
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
    duration: 300,
  });

  const focus = useFocus(context);
  const click = useClick(context);
  const hover = useHover(context, {
    enabled: !openOnСlick,
    handleClose: safePolygon({
      requireIntent: false,
    }),
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    openOnСlick ? click : undefined,
  ]);

  const getArrowPosition = useMemo(() => {
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
  }, [middlewareData.shift, middlewareData.arrow, middlewareData.flip]);


  return ({
    setReference,
    setFloating,
    getReferenceProps,
    getFloatingProps,
    getArrowPosition,
    floatingStyles: { ...floatingStyles, ...styles },
    context,
  });
};

export default useTooltip;

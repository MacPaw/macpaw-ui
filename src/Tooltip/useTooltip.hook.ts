import { HTMLProps, useMemo } from 'react';
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
  ReferenceType,
  UseFloatingReturn,
  FloatingContext,
} from '@floating-ui/react';

interface useTooltipProps {
  isForce: boolean;
  arrowRef: React.MutableRefObject<null>;
  openOnClick: boolean;
  position: Placement;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface useTooltip extends Partial<UseFloatingReturn> {
  setReference: (node: ReferenceType | null) => void;
  setFloating: (node: HTMLElement | null) => void;
  getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => Record<string, unknown>;
  getFloatingProps: (userProps?: HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
  getArrowPosition: string | number;
  context: FloatingContext;
}

const useTooltip = ({ isForce, arrowRef, openOnClick, position, isOpen, setIsOpen }: useTooltipProps): useTooltip => {
  const {
    middlewareData,
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    open: isOpen,
    // eslint-disable-next-line no-undefined
    onOpenChange: isForce ? undefined : setIsOpen,
    placement: position,
    whileElementsMounted: autoUpdate,
    middleware: [
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
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
    enabled: !openOnClick,
    handleClose: safePolygon({
      requireIntent: false,
    }),
  });

  // eslint-disable-next-line no-undefined
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, openOnClick ? click : undefined]);

  const getArrowPosition = useMemo(() => {
    const shiftPosition = middlewareData?.shift?.y || middlewareData?.shift?.x || 0;
    const arrowPosition = middlewareData?.arrow?.y || middlewareData?.arrow?.x || 0;
    const coordinates = arrowPosition - shiftPosition;

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const overflowSize = (arrowPosition * 2) / shiftPosition;

    const positionOnOverflow = `${middlewareData?.shift?.x ? '85' : '59'}%`;

    // eslint-disable-next-line no-nested-ternary,@typescript-eslint/no-magic-numbers
    return coordinates < 10
      ? // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        10
      : // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      middlewareData?.flip?.overflows?.[0] && overflowSize > -3 && shiftPosition < 0
      ? positionOnOverflow
      : coordinates;
  }, [middlewareData.shift, middlewareData.arrow, middlewareData.flip]);

  return {
    setReference,
    setFloating,
    getReferenceProps,
    getFloatingProps,
    getArrowPosition,
    floatingStyles: { ...floatingStyles, ...styles },
    context,
  };
};

export default useTooltip;

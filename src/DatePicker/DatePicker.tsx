/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  MouseEvent as ReactMouseEvent,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import cx from 'clsx';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import Input from '../Input/Input';
import { Error as InputError } from '../types';

const BOTTOM_OFFSET = 320;

export type PossibleDateType = Date | Date[] | DateRange | undefined;

export type DaySelectionMode = 'single' | 'multiple' | 'range' | 'default';

export interface DatePickerCommonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: PossibleDateType;
  error?: InputError;
  className?: string;
  calendarClassName?: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  scale?: 'medium' | 'small' | 'big';
  openSite?: 'top' | 'bottom' | 'center' | 'auto';
  closeOnSelect?: boolean;
  dateFormat?: string;
  defaultMonth?: Date;
  /** @deprecated Use startMonth instead. Converts to startMonth internally. */
  fromYear?: number;
  /** @deprecated Use endMonth instead. Converts to endMonth internally. */
  toYear?: number;
  /** @deprecated Use startMonth instead. */
  fromDate?: Date;
  /** @deprecated Use endMonth instead. */
  toDate?: Date;
  /** The earliest month to start the month navigation (v9 API) */
  startMonth?: Date;
  /** The latest month to end the month navigation (v9 API) */
  endMonth?: Date;
  /** Navigation style: 'pagination' shows default navigation, 'dropdown' shows month/year dropdowns, 'disabled' disables navigation */
  navigation?: 'pagination' | 'dropdown' | 'disabled';
}

export interface DatePickerRangeSingleProps extends DatePickerCommonProps {
  selectionMode: 'single';
  onChange?: (date: Date) => void;
  formatter?: (date: Date) => string;
}

export interface DatePickerRangeMultipleProps extends DatePickerCommonProps {
  selectionMode: 'multiple';
  onChange?: (date: Date[] | undefined) => void;
  formatter?: (date: Date[]) => string;
}

export interface DatePickerRangeRangeProps extends DatePickerCommonProps {
  selectionMode: 'range';
  onChange?: (date: DateRange | undefined) => void;
  formatter?: (date: DateRange[]) => string;
}

export type DatePickerProps = DatePickerRangeSingleProps | DatePickerRangeMultipleProps | DatePickerRangeRangeProps;

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      label,
      placeholder = '',
      value: initialValue,
      error: externalError,
      disabled,
      scale,
      className,
      calendarClassName,
      closeOnSelect = true,
      openSite = 'auto',
      dateFormat = 'P',
      formatter,
      defaultMonth,
      fromYear,
      toYear,
      fromDate,
      toDate,
      startMonth: propStartMonth,
      endMonth: propEndMonth,
      selectionMode = 'single',
      navigation,
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const [value, setValue] = useState<PossibleDateType>(initialValue);
    const [isOpenOnTop, setIsOpenOnTop] = useState(openSite === 'top');
    const [isActive, setIsActive] = useState(false);
    const [error, setError] = useState('');
    const wrapperRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

    const errorMessage = error || externalError;

    const wrapperClassNames = cx('date-picker', className);
    const calendarClassNames = cx('calendar', calendarClassName, {
      'site-top': isOpenOnTop && openSite !== 'center',
      'site-bottom': !isOpenOnTop && openSite !== 'center',
      'site-center': openSite === 'center',
    });

    // Convert deprecated props to v9 API (startMonth/endMonth)
    const startMonth = useMemo(() => {
      if (propStartMonth) return propStartMonth;
      if (fromDate) return fromDate;
      // eslint-disable-next-line no-undefined
      if (fromYear !== undefined) return new Date(fromYear, 0);

      // eslint-disable-next-line no-undefined
      return undefined;
    }, [propStartMonth, fromDate, fromYear]);

    const endMonth = useMemo(() => {
      const DECEMBER = 11;

      if (propEndMonth) return propEndMonth;
      if (toDate) return toDate;
      // eslint-disable-next-line no-undefined
      if (toYear !== undefined) return new Date(toYear, DECEMBER);

      // eslint-disable-next-line no-undefined
      return undefined;
    }, [propEndMonth, toDate, toYear]);

    // Build navigation props for v9 API
    const navigationProps = useMemo(() => {
      const props: {
        captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
        disableNavigation?: boolean;
        hideNavigation?: boolean;
      } = {};

      switch (navigation) {
        case 'disabled':
          props.disableNavigation = true;
          break;
        case 'dropdown':
          props.captionLayout = 'dropdown';
          props.hideNavigation = true;
          break;
        case 'pagination':
          // 'label' is the default caption layout with arrow navigation
          props.captionLayout = 'label';
          break;
        default:
          break;
      }

      return props;
    }, [navigation]);

    // eslint-disable-next-line complexity
    const formattedValue = useMemo(() => {
      if (!value) return '';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (formatter) return formatter(value as any);

      try {
        if (value instanceof Date) return format(value, dateFormat as string);
        if (Array.isArray(value)) return value.map((dateItem) => format(dateItem, dateFormat as string));
        if (typeof value === 'object') {
          const formattedFrom = value.from ? format(value.from, dateFormat as string) : '';
          const formattedTo = value.to ? format(value.to, dateFormat as string) : '';

          if (!formattedFrom && formattedTo) return '';

          return `${formattedFrom} - ${formattedTo}`;
        }

        return '';
      } catch (currentError) {
        setError((currentError as Error)?.message ?? 'Formatting error.');

        return '';
      }
    }, [value, placeholder, formatter]);

    const calculateOpenSite = (e: ReactMouseEvent<HTMLInputElement>): void => {
      if (openSite !== 'auto') return;

      setIsOpenOnTop(window.innerHeight - e.clientY <= BOTTOM_OFFSET);
    };

    const handleInputClick = (e: ReactMouseEvent<HTMLInputElement>) => {
      calculateOpenSite(e);
      setIsActive((prevIsActive) => !prevIsActive);
    };

    const handleClose = () => {
      setIsActive(false);
    };

    const handleSelectDate = (date: PossibleDateType) => {
      setValue(date);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange?.(date as any);

      if (closeOnSelect) handleClose();
    };

    useEffect(() => {
      const { current: wrapper } = wrapperRef;

      const listener = (event: MouseEvent | TouchEvent): void => {
        if (!wrapper || wrapper.contains(event.target as Node)) return;

        handleClose();
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return (): void => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, []);

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <div className={wrapperClassNames} ref={wrapperRef}>
        <Input
          type="text"
          disabled={disabled}
          label={label}
          scale={scale}
          error={errorMessage}
          value={formattedValue}
          placeholder={placeholder}
          onChange={() => {}}
          onClick={handleInputClick}
          ref={ref}
          {...restProps}
        />
        {isActive && (
          <DayPicker
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            mode={selectionMode as any}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            selected={value as any}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSelect={handleSelectDate as any}
            defaultMonth={defaultMonth}
            weekStartsOn={1}
            startMonth={startMonth}
            endMonth={endMonth}
            className={calendarClassNames}
            {...navigationProps}
          />
        )}
      </div>
    );
  },
);

export default DatePicker;

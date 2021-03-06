import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import cx from 'clsx';

export interface Dropdown extends HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactElement;
  position?: 'left' | 'center' | 'right';
  onOpen?: () => void;
  onClose?: () => void;
}

const DropDown: React.FC<Dropdown> = (props) => {
  const { className, children, trigger, position, onOpen, onClose, ...other } = props;
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerClone = React.cloneElement(trigger, {
    onClick: () => {
      setIsOpen(!isOpen);
      if (trigger.props.onClick) trigger.props.onClick();
    },
  });

  const menuClassName = cx('dropdown-menu', {
    '-left': !position || position === 'left',
    '-right': position === 'right',
    '-center': position === 'center',
  });

  useEffect(() => {
    const listener = (event: PointerEvent) => {
      if (!rootRef.current || !menuRef.current) return;
      const clickOnRoot = rootRef.current.contains(event.target as Node);
      const clickOnMenu = menuRef.current.contains(event.target as Node);
      // do not handle if click is on trigger
      if (clickOnRoot && !clickOnMenu) return;
      setIsOpen(false);
    };

    document.addEventListener('pointerdown', listener);

    return () => document.removeEventListener('pointerdown', listener);
  }, []);

  useEffect(() => {
    if (isOpen && onOpen) {
      onOpen();
    } else if (onClose) {
      onClose();
    }
  }, [isOpen, onClose, onOpen]);

  return (
    <div className={cx('dropdown', isOpen && '-open', className)} {...other} ref={rootRef}>
      {triggerClone}
      <div className={menuClassName} ref={menuRef}>
        {children}
      </div>
    </div>
  );
};

export default DropDown;

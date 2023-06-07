import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CheckCircleIcon, CopyIcon as CopyIconUi } from '../Icons/jsx';
import Tooltip from '../Tooltip/Tooltip';
import { InputValueType } from '../types';

interface ClipboardProps {
  copy?: React.ReactElement | string;
  element: MutableRefObject<HTMLInputElement | undefined>;
  onCopyEvent?: (value: InputValueType) => void;
}

const Clipboard: React.FC<ClipboardProps> = ({ copy, element, onCopyEvent }) => {
  const [canBeCopied, setCanBeCopied] = useState(true);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!canBeCopied) timerRef.current = setTimeout(() => setCanBeCopied(true), 1600);

    return () => clearTimeout(timerRef.current as NodeJS.Timeout);
  }, [canBeCopied]);

  const iconHandler = () => {
    if (element.current?.value) {
      onCopyEvent?.(element.current?.value);
      navigator.clipboard.writeText(element.current?.value);
      setCanBeCopied(false);
    }
  };

  const CopyButton = () => <button className="clipboard__button" onClick={iconHandler}><CopyIconUi className="clipboard__icon" /></button>;

  const CopyIcon = () => (copy ? <Tooltip maxWidth={'auto'} content={copy} position="top"><CopyButton /></Tooltip> : <CopyButton />);

  return <div className="clipboard">{canBeCopied ? <CopyIcon /> : <CheckCircleIcon className="clipboard__done-icon" />}</div>;
};

export default Clipboard;

import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CheckCircleIcon, CopyIcon as CopyIconUi } from '../Icons/jsx';
import Tooltip from '../Tooltip/Tooltip';
import { InputValueType } from '../types';

interface ClipboardProps {
  copy?: React.ReactElement | string;
  element: MutableRefObject<HTMLInputElement | undefined>;
  onCopyEvent?: (value: InputValueType) => void;
}

const TIMEOUT = 1600;

const Clipboard: React.FC<ClipboardProps> = ({ copy, element, onCopyEvent }) => {
  const [canBeCopied, setCanBeCopied] = useState(true);
  // eslint-disable-next-line no-undefined
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (!canBeCopied) timerRef.current = setTimeout(() => setCanBeCopied(true), TIMEOUT);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [canBeCopied]);

  const iconHandler = () => {
    if (element.current?.value) {
      onCopyEvent?.(element.current?.value as string);
      navigator.clipboard.writeText(element.current?.value as string);
      setCanBeCopied(false);
    }
  };

  const CopyButton = () => (
    <button className="clipboard__button" onClick={iconHandler}>
      <CopyIconUi className="clipboard__icon" />
    </button>
  );

  const CopyIcon = () =>
    copy ? (
      <Tooltip maxWidth="auto" content={copy} position="top">
        <CopyButton />
      </Tooltip>
    ) : (
      <CopyButton />
    );

  return (
    <div className="clipboard">{canBeCopied ? <CopyIcon /> : <CheckCircleIcon className="clipboard__done-icon" />}</div>
  );
};

export default Clipboard;

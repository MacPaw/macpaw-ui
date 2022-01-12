import React from 'react';
import cx from 'clsx';

interface Tooltip {
  content: React.ReactNode;
  position: 'top' | 'bottom' | 'left' | 'right';
  maxWidth?: number | string;
  forceShow?: boolean;
  forceHide?: boolean;
}

const Tooltip: React.FC<Tooltip> = ({
  children,
  content,
  position,
  maxWidth,
  forceShow = false,
  forceHide = false,
}) => {
  const messageStyles = maxWidth ? ({ width: maxWidth } as React.CSSProperties) : {};
  const messageClassNames = cx(
    'tooltip-message',
    `-${position}`,
    {
      '-show': forceShow,
      '-hide': forceHide,
      '-custom-width': !!maxWidth,
    }
  );

  return (
    <div className="tooltip">
      <div className={messageClassNames}>
        <div className="tooltip-content" style={messageStyles}>{content}</div>
      </div>
      <div className="tooltip-trigger">
        {children}
      </div>
    </div>
  );
};

export default Tooltip;

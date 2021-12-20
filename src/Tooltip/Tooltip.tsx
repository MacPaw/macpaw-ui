import React, { useState, useEffect } from 'react';
import cx from 'clsx';

interface Tooltip {
  content: React.ReactNode;
  position: 'top' | 'bottom' | 'left' | 'right';
  maxWidth?: number | string;
  forceIsVisible?: boolean;
  onVisibleTooltipChange?: (isVisible: boolean) => void;
}

const Tooltip: React.FC<Tooltip> = ({
  children,
  content,
  position,
  maxWidth,
  forceIsVisible = false,
  onVisibleTooltipChange,
}) => {
  const [isVisible, setIsVisible] = useState(forceIsVisible);

  const messageStyles = maxWidth && { width: maxWidth };

  const messageClassNames = cx(
    'tooltip-message',
    `-${position}`,
    {
      '-custom-width': !!maxWidth,
    }
  );

  const handleChangeVisibility = (nextIsVisible: boolean) => {
    setIsVisible(nextIsVisible);
    onVisibleTooltipChange?.(nextIsVisible);
  };

  const showTooltip = () => handleChangeVisibility(true);

  const hideTooltip = () => handleChangeVisibility(false);

  useEffect(() => setIsVisible(forceIsVisible), [forceIsVisible]);

  return (
    <div className="tooltip" onMouseLeave={hideTooltip}>
      {isVisible && (
        <div className={messageClassNames}>
          <div className="tooltip-content" style={messageStyles}>{content}</div>
        </div>
      )}
      <span
        className="tooltip-trigger"
        onMouseOver={showTooltip}
        onFocus={showTooltip}
      >
        {children}
      </span>
    </div>
  );
};

export default Tooltip;

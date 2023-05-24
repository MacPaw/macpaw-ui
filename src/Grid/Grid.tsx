import React, { ElementType, ReactNode } from 'react';
import Panel, { PanelProps } from '../Panel/Panel';

interface Grid extends PanelProps {
  icon?: ReactNode;
  action?: ReactNode;
  notification?: ReactNode;
  component?: ReactNode;
}

const Grid: React.FC<React.PropsWithChildren<Grid>> = (props) => {
  const {
    icon,
    action,
    notification,
    children,
    className,
    component,
    ...other
  } = props;
  let gridClassNames = 'grid';

  if (className) gridClassNames += ` ${className}`;
  const Component = component ? component as ElementType : Panel;

  return (
    <Component {...other} className={gridClassNames}>
      <div className="grid-layout">
        {icon && <div className="grid-icon">{icon}</div>}
        <div className="grid-rows">
          {children}
        </div>
        <div className="grid-action">{action}</div>
      </div>
      {notification && <div className="grid-notification">{notification}</div>}
    </Component>
  );
};

export default Grid;

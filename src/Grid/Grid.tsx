import React, { ReactNode } from 'react';
import Panel, { PanelProps }  from '../Panel/Panel';

interface Grid extends PanelProps {
  icon?: ReactNode;
  action?: ReactNode;
  notification?: ReactNode;
}

const Grid: React.FC<Grid> = (props) => {
  const { icon, action, notification, children, className, ...other } = props;
  let gridClassNames = 'grid';
  if (className) gridClassNames += ` ${className}`;
  const rowsCount = React.Children.count(children);
  let gridActionClassNames = 'grid-action';
  let gridIconClassNames = 'grid-icon';
  if (rowsCount > 1) gridActionClassNames += ' -top';
  if (rowsCount > 1) gridIconClassNames += ' -top';

  return (
    <Panel {...other} className={gridClassNames}>
      <div className="grid-layout">
        {icon && <div className={gridIconClassNames}>{icon}</div>}
        <div className="grid-rows">
          {children}
        </div>
        <div className={gridActionClassNames}>{action}</div>
      </div>
      {notification && <div className="grid-notification">{notification}</div>}
    </Panel>
  );
};

export default Grid;

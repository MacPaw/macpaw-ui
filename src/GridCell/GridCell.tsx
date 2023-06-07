import React from 'react';

interface GridCell {
  type: 'primary' | 'secondary';
}

const GridCell: React.FC<React.PropsWithChildren<GridCell>> = (props) => {
  const { type, ...other } = props;
  const Component = other.children ? 'div' : 'span'; // component type is important for zebra style

  return <Component className={`gridCell ${type === 'primary' ? '-primary' : '-secondary'}`} {...other} />;
};

export default GridCell;

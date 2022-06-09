import React, { FC, HTMLAttributes } from 'react';

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
}

const TableRow: FC<React.PropsWithChildren<TableRowProps>> = (props) => {
  const { children, ...other } = props;

  return (
    <tr {...other}>
      <td />
      {children}
      <td />
    </tr>
  );
};

export default TableRow;

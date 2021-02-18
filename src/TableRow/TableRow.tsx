import React, { FC, HTMLAttributes } from 'react';

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

const TableRow: FC<TableRowProps> = (props) => {
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

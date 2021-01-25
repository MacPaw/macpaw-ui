import React from 'react';

const TableRow = (props) => {
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

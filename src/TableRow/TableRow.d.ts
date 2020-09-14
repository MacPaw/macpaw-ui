import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLTableRowElement> {}

declare const TableRow: FC<Props>;

export default TableRow;
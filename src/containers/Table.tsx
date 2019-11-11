import React, { FC } from 'react';
import TableRow from '../components/TableRow';
import styled from 'styled-components';
import TableHeader from '../components/TableHeader';
import { Column, useTable} from '../utils/tableHook';

export interface TableProps {
    data?: Array<any>
    columns?: Column[]
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,id:string)=>void
}

const Table: FC<TableProps> = ({ data = [], columns = [], onClick }) => {
    const {
        rows,
        header
    } = useTable({ data, columns })

    const tableBody = rows.map(row => (<TableRow key={row.id} onClick={onClick} header={header} row={row}/>))

    return (
        <StyledTable>
            <TableHeader cells={header}/>
            {tableBody}
        </StyledTable>
    )
}
export default Table



const StyledTable = styled.table`
    width:100%;
    border-spacing: 0;

`
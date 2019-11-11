import React, { FC } from 'react';
import styled from 'styled-components';


interface TableHeaderProps {
    cells: Array<string>
}

const TableHeader: FC<TableHeaderProps> = ({ cells }) => {
    const _cells = cells.map((cell, index) => (
        <Cell key={index}>
            <BorderLesCell>{cell}</BorderLesCell>
        </Cell>
    ))

    return (
        <HeaderRow>
            {_cells}
        </HeaderRow>
    )

}
export default TableHeader


const Cell = styled.td`
    padding:0rem;
    border: 1px solid rgba(230, 230, 230, 0.5);
    :first-of-type{
        width: 44px;
    }
    :last-of-type{
        width: 44px;
    }
    @media(max-width: 450px) {
        display:flex;
        box-sizing: border-box;
        min-width: 50%;
    }
`

const BorderLesCell = styled.div`
    border: 0;
    padding:1rem;
    @media(max-width: 450px) {
        display:flex;
        box-sizing: border-box;
        min-width: 50%;
        :first-of-type{
            border-right:1px solid rgba(230, 230, 230, 0.5);
        }
    }
`

const Row = styled.tr`
    border: 1px solid rgba(230, 230, 230, 0.5);
    @media(max-width: 450px) {
        padding:0rem;
        margin:1.5rem;
        display:flex;
        flex-direction:column;
        width: calc( 100% - 1.5rem * 2 );
        box-sizing:border-box;
        
}
`
const HeaderRow = styled(Row)`
background: #F3F3F3;
@media(max-width: 450px) {
        display:none;
  }
`

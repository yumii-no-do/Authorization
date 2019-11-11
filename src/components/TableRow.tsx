import React, { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Close from '@material-ui/icons/Close';

interface TableRowProps {
    row: {
        image: string
        cells: Array<any>
        id: string
    },
    header: Array<string>
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void
    isHeader?:boolean
}


const TableRow: FC<TableRowProps> = ({ row, onClick, header,isHeader=false }) => {
    const cells = row.cells.map((cell, index) => (
        <Cell key={index}>
            <MediaVisivle key={index}>{header[index+1]}</MediaVisivle>
            <BorderLesCell key={row.id}>{cell}</BorderLesCell>
        </Cell>
    ))

    if (isHeader) {
        return <HeaderRow>{header.map(cell => (
            <Cell>{cell}</Cell>
        ))}</HeaderRow>
    }

    const handleCkick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick(e, row.id)
    }

    return <Row>
        <Cell><Image src={row.image} alt={row.image} /></Cell>
        {cells}
        {onClick && <Cell><ActionButton onClick={handleCkick} /></Cell>}
        </Row>
}
export default TableRow


const Cell = styled.td`
    padding:0rem;
    border: 1px solid rgba(230, 230, 230, 0.5);

    @media(max-width: 450px) {
        display:flex;
        box-sizing: border-box;
        min-width: 50%;
        :last-child{
            display:none;
        }
    }
    @media(min-width: 450px) {
        :first-of-type{
            width: 44px;
        }
        :last-of-type{
            width: 44px;
        } 
        
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
        margin-bottom:30px;
        display:flex;
        flex-direction:column;
        /* width: calc( 100% - 1.5rem * 2 ); */
        box-sizing:border-box;     
  }
  :hover{
      background:#FAFAFA;
  }
`
const HeaderRow = styled(Row)`
background: #F3F3F3;
`

const MediaVisivle = styled(BorderLesCell)`
    background: #F3F3F3;
    @media(min-width: 450px) {
        display:none;
  }
`

const Image = styled.img`
    width:24px;
    height:24px;
    border-radius:50%;
    margin: 10px 10px 5px 10px;
     @media(max-width: 450px) {
        width:25%;
        height:auto;
        margin:10px auto;
    }
`

interface ActionButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    check?: boolean
}

const ActionButton: FC<ActionButtonProps> = ({ onClick }) => {
    const [check, setCheck] = useState(false);
    const handleCkick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick(e);
        setCheck(!check)
    }
    return (
        <ThemeProvider theme={{ check }}>
            <ActiveButton onClick={handleCkick}><Close fontSize="small"/></ActiveButton>
        </ThemeProvider>
    )
}
const ActiveButton = styled.button`
    background:${props => props.theme.check ? '#C6213C' : '#FAFAFA'};
    color:${props => props.theme.check ? '#FFFFFF' : '#6B7F94'};
    transform:rotate(${props => props.theme.check ? 45 : 0}deg);
     margin:auto;
     border-radius:50%;
     width:24px;
     height:24px;
     margin: 10px 10px 5px 10px;
    font-size: 15px;
    padding: 1px 1px 5px 1px;
    outline: none;
`
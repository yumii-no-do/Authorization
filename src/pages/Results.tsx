import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ApplicationState } from '../store/index';
import { CountedProduct } from '../store/results/types';
import { fetchRequest } from '../store/results/actions';
import { Column } from '../utils/tableHook';
import Table from '../containers/Table';

interface IResultsProps {
    list: CountedProduct[],
    loading: boolean,
    fetchRequest: any
}

const columns:Column[] = [
    {
        header: '',
        accessor: 'img_url',
        type:'image'
    },
    {
        header: 'Наименование',
        accessor: 'name'
    },
    {
        header: 'Кол-во',
        accessor: 'amount'
    },
    {
        header: 'Цена за ед,₽',
        accessor: 'unit_price'
    },
    {
        header: 'Стоимость,₽',
        accessor: 'price'
    },
]

const Results: FC<IResultsProps> = ({ list, loading, fetchRequest }) => {

    useEffect(() => {
        fetchRequest()
    },[]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,id:string) => {
        // do somebody
    }

    return (
        <CoverStyles>
            <Title>Результаты расчёта</Title>
            <Table onClick={handleClick} columns={columns} data={list}  />
        </CoverStyles>
    )
}

const mapStateToProps = ({ results }: ApplicationState) => ({
    list: results.data,
    loading: results.loading,
})

const mapDispatchToProps = { fetchRequest }

export default connect(mapStateToProps, mapDispatchToProps)(Results)


const CoverStyles = styled.div`
        width:calc(100% - 1rem * 2);
        margin:1rem;
     @media(min-width: 450px) {
        width:calc(100% - 3rem * 2);
        margin:3rem;
    }
`
const Title = styled.h4`
    padding:21px 0;
    margin-bottom:31px !important ;
    border-bottom: 1px solid #E6E6E6;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 100%;
color: #C6213C;
`
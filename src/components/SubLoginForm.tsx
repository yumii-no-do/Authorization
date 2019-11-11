import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from '@material-ui/core';

enum INITIAL_VALUES{
    FORGOT_PASSWORD = 'Забыли пaроль?',
    FORGOT_PASSWORD_HREF='#',
    SINUP = 'Ещё нет аккаунта? Регистрация',
    SINUP_HREF='#',

}

const SpaceBetween = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    max-width:380px;
    margin:1rem;
`

const SubLoginForm:FC = () => (
    <SpaceBetween>
        <Link href={INITIAL_VALUES.FORGOT_PASSWORD_HREF}  variant='subtitle2'>{INITIAL_VALUES.FORGOT_PASSWORD}</Link>
        <Link href={INITIAL_VALUES.SINUP_HREF}   variant='subtitle2'>{INITIAL_VALUES.SINUP}</Link>
    </SpaceBetween>
)

export default SubLoginForm
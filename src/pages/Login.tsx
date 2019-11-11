import React, { FC, useEffect } from 'react'
import { push, Push } from 'connected-react-router'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Typography} from '@material-ui/core';


import { fetchLogin } from '../store/authentication/actions';
import LoginForm from '../components/LoginForm';
import { LoginOptions } from '../store/authentication/types';
import { ApplicationState } from '../store/index';
import LockIcon from '../components/LockIcon';
import SubLoginForm from '../components/SubLoginForm';
import Copyright from '../components/Copyright';


enum INITIL_VALUES{
    TITLE = 'Вход в аккаунт',
    PATH = '/'
}

const Coverage = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;
`


interface ILoginProps {
    fetchLogin: (options: LoginOptions) => void
    push: Push,
    isLoggedIn: boolean,
    error?: string

}

const Login: FC<ILoginProps> = ({ fetchLogin, push, isLoggedIn, error }) => {

    useEffect(() => {
        isLoggedIn && push(INITIL_VALUES.PATH)
    });

    const handleSubmit = ({ login, password, isSave }: LoginOptions) => {
        fetchLogin({ login, password, isSave })
        push(INITIL_VALUES.PATH)
    }

    return (
        <Coverage>
            <LockIcon />
            <Typography variant="h5" component="h5">{INITIL_VALUES.TITLE}</Typography>
            <LoginForm error={error} onSubmit={handleSubmit} />
            <SubLoginForm />
            <Copyright marginTop="4rem"/>
        </Coverage>
    )
}

const mapStateToProps = ({ auth }: ApplicationState) => ({ isLoggedIn: auth.isLoggedIn, error: auth.errors })
const mapDispatchToProps = {fetchLogin,push}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


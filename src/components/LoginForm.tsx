import React, { FC, useState } from 'react'
import { Button, TextField, FormControlLabel, Checkbox, Box, FormLabel } from '@material-ui/core';
import styled from 'styled-components'

import { LoginOptions } from '../store/authentication/types';


interface ILoginFormProps{
    onSubmit?: (e:LoginOptions) => void
    error?:string
}

enum INITIAL_VALUES{
    LOGIN_LABEL = 'Почта',
    PASSWORD_LABEL = 'Пароль',
    SAVE_LABEL = 'Запомнить меня',
    SUBMIT_LABEL = 'Войти в аккаунт'
}

const LoginForm: FC<ILoginFormProps> = ({ onSubmit, error}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isSave, setIsSave] = useState(false);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onSubmit && onSubmit({ login, password, isSave})
        setLogin('');
        setPassword('')
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)        
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const handleChangeSave = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSave(e.currentTarget.checked)
    }


    return (
        <Form onSubmit={handleSubmit}>
            {Boolean(error) && <Box marginTop={2}><FormLabel error>{error}</FormLabel></Box>}
            <TextField
                id="outlined-basic"
                label={INITIAL_VALUES.LOGIN_LABEL}
                margin="normal"
                variant="outlined"
                value={login}
                onChange={handleChangeEmail}
                type='email'
                error={Boolean(error)}
                required
            />
            <TextField
                id="outlined-basic"
                label={INITIAL_VALUES.PASSWORD_LABEL}
                margin="normal"
                variant="outlined"
                value={password}
                onChange={handleChangePassword}
                type='password'
                error={Boolean(error)}
                required
            />
            <FormControlLabel
                control={<Checkbox color="primary" checked={isSave} onChange={handleChangeSave} />}
                label={INITIAL_VALUES.SAVE_LABEL}
            />
            <Box marginTop="30px">
                <Button fullWidth  color="primary" variant="contained" type='submit' >
                    {INITIAL_VALUES.SUBMIT_LABEL}
                </Button>
            </Box>
            
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 380px;
    width:100%;
`


export default LoginForm
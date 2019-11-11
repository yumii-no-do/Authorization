import { AuthActionTypes, LoginOptions } from './types'
import { action } from 'typesafe-actions';


export const fetchSuccess = (token: string, isSave: boolean) => action(AuthActionTypes.FETCH_SUCCESS, { token, isSave})
export const fetchError = (message: string) => action(AuthActionTypes.FETCH_ERROR, message)
export const fetchLogin = ({ login, password, isSave }: LoginOptions) => action(AuthActionTypes.FETCH_REQUEST, { login, password, isSave })
export const fetchLogout = () => action(AuthActionTypes.LOGOUT)


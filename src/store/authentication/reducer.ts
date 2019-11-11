import { Reducer } from 'redux'
import { AuthState, AuthActionTypes } from './types';
import { isAuthenticated, setToken, getToken } from '../../utils/auth';

export const initialState: AuthState = {
    isLoggedIn: isAuthenticated(),
    loading: false,
    token: getToken(),
    isSave:isAuthenticated()
}

export const reducer: Reducer<AuthState> = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true }
        }
        case AuthActionTypes.FETCH_SUCCESS: {
            const { isSave, token } = action.payload;

            isSave && setToken(token)
            return { ...state, ...action.payload, isLoggedIn:true, loading: false,  }
        }
        case AuthActionTypes.FETCH_ERROR: {
            return { ...state, errors: action.payload, loading: false }
        }
        case AuthActionTypes.LOGOUT: {
            return { ...initialState, isLoggedIn:false}
        }
        default: {
            return state
        }
    }
}


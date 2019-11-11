
export interface LoginOptions{
    login: string
    password: string
    isSave:boolean
}


export enum AuthActionTypes{
    FETCH_REQUEST = '@@auth/FETCH_REQUEST',
    FETCH_SUCCESS = '@@auth/FETCH_SUCCESS',
    FETCH_ERROR = '@@auth/FETCH_ERROR',
    LOGOUT = '@@auth/LOGOUT'
}

export interface AuthState{
    readonly loading: boolean
    readonly isLoggedIn: boolean
    readonly errors?: string
    readonly isSave?: boolean
    readonly token?: string | null
}
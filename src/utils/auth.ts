
const tokenKey = 'jwt';
export const setToken = (token:string) => {
    localStorage.setItem(tokenKey, token)
}
export const getToken = ():string|null => {
    return localStorage.getItem(tokenKey)
}
export const isAuthenticated = ():boolean => {
    return Boolean(localStorage.getItem(tokenKey))
}
export const deleteToken = (): void => {
    localStorage.removeItem(tokenKey)
}

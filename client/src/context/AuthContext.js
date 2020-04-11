import {createContext} from 'react'

function noop() {}

export const AuthContext = createContext({
    token: null,
    loginId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})
import {instance} from './api-utils';


export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export const authApi = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    addAuth(data: LoginDataType) {
        return instance.post(`auth/login`, data)
    },
    deleteAuth() {
        return instance.delete(`auth/login`)
    },
}
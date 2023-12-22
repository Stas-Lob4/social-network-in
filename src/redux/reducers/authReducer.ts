const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}
export const authReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...action.data, isAuth: true, captchaUrl: null }
        case 'LOGOUT':{
            return {...state, isAuth: false}
        }
        case 'GET-CAPTCHA-URL':{
            return {...state, captchaUrl: action.captchaUrl}
        }
        default:
            return state
    }
}

type ActionType = SetUserDataActionType | LogoutActionType | GetCaptchaUrlActionType

type SetUserDataActionType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {userId, email, login}
    } as const
}

type LogoutActionType = ReturnType<typeof logoutAC>
export const logoutAC = () => ({type: "LOGOUT"} as const)

type GetCaptchaUrlActionType = ReturnType<typeof getCaptchaUrlAC>
export const getCaptchaUrlAC = (captchaUrl: string) => ({type: "GET-CAPTCHA-URL", captchaUrl} as const)

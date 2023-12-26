import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
} as InitialStateType

type InitialStateType = {
    userId: null | number
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

const slice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserInfoType>) => {
            state.userId = action.payload.userId
            state.email = action.payload.email
            state.login = action.payload.login
            state.isAuth = true
            state.captchaUrl = null
        },
        logout: (state, action: PayloadAction) => {
            state.userId = null
            state.email = null
            state.login = null
            state.isAuth = false
            state.captchaUrl = null
        },
        getCaptchaUrl: (state, action: PayloadAction<{ captchaUrl: string }>) => {
            state.captchaUrl = action.payload.captchaUrl
        }
    },
    selectors: {
        userId: sliceState => sliceState.userId,
        email: sliceState => sliceState.email,
        login: sliceState => sliceState.login,
        isAuth: sliceState => sliceState.isAuth,
        captchaUrl: sliceState => sliceState.captchaUrl
    }
})

export const authActions = slice.actions
export const authReducer = slice.reducer
export const authSelectors = slice.selectors
type UserInfoType = { userId: number, email: string, login: string }


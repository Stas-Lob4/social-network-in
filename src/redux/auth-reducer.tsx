const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export const authReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

type ActionType = SetUserDataActionType

type SetUserDataActionType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {userId, email, login}
    } as const
}
const initialState = {
    initialApp: false,
    status: 'idle' as RequestStatusType,
    error:  null as string | null,
}

export type InitialStateType = typeof initialState

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"
export const appReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType => {
    switch (action.type) {
        case 'SET-INITIAL-APP':
            return {
                ...state,
                initialApp: action.initialApp
            }
        case 'SET-STATUS-APP':
            return {
                ...state,
                status: action.status
            }
        case 'SET-ERROR-APP':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

type ActionType = SetStatusAppActionType | SetInitialAppActionType | SetErrorAppActionType

type SetInitialAppActionType = ReturnType<typeof setInitialAppAC>
export const setInitialAppAC = (initialApp: boolean) => ({ type: "SET-INITIAL-APP", initialApp} as const)

type SetStatusAppActionType = ReturnType<typeof setStatusAppAC>
export const setStatusAppAC = (status: RequestStatusType) => ({ type: "SET-STATUS-APP", status} as const)

type SetErrorAppActionType = ReturnType<typeof setErrorAppAC>
export const setErrorAppAC = (error: string | null) => ({ type: "SET-ERROR-APP", error} as const)

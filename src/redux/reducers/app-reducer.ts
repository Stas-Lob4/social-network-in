const initialState = {
    initialApp: false,
}

type InitialStateType = {
    initialApp: boolean
}
export const appReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType => {
    switch (action.type) {
        case 'SET-STATUS-APP':
            return {
                ...state,
                initialApp: action.initialApp
            }
        default:
            return state
    }
}

type ActionType = SetInitialStatusAPpActionType

type SetInitialStatusAPpActionType = ReturnType<typeof setInitialStatusAppAC>
export const setInitialStatusAppAC = (initialApp: boolean) => ({ type: "SET-STATUS-APP", initialApp} as const)


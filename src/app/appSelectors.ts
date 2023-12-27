import { AppRootStateType } from "./store"

export const initialAppSelector = (state: AppRootStateType) => state.appReducer.initialApp

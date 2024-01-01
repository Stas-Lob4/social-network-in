import { AppRootStateType } from "../../../../app/store"

export const isAuthSelector = (state: AppRootStateType) => state.authReducer.isAuth
export const authUserIdSelector = (state: AppRootStateType) => state.authReducer.userId

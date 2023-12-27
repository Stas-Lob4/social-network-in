import { AppRootStateType } from "../../../../app/store"

export const isAuthSelector = (state: AppRootStateType) => state.authReducer.isAuth

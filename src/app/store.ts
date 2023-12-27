import { AnyAction } from "redux"
import { profileReducer } from "../pages/profile/model/profileReducer"
import { dialogReducer } from "../pages/dialogs/model/dialogReducer"
import { usersReducer } from "../pages/users/model/usersReducer"
import { authReducer } from "../pages/login/model/auth/authReducer"
import { ThunkAction } from "redux-thunk"
import { appReducer } from "./appReducer"
import { chatReducer } from "../pages/chat/model/chatReducer"
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const store = configureStore({
  reducer: {
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    usersReducer: usersReducer,
    authReducer: authReducer,
    appReducer: appReducer,
    chatReducer: chatReducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ThunkActionType = ThunkAction<void, AppRootStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

import { AppRootStateType } from "../../../app/store"

export const dialogsSelector = (state: AppRootStateType) => state.dialogReducer.dialogs
export const messagesSelector = (state: AppRootStateType) => state.dialogReducer.messages

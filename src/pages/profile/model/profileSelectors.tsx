import { AppRootStateType } from "../../../app/store"

export const statusProfileSelector = (state: AppRootStateType) => state.profileReducer.status
export const profileInfoSelector = (state: AppRootStateType) => state.profileReducer.profile

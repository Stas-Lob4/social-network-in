import { AppRootStateType } from "../../../app/store"

export const getUsers = (state: AppRootStateType) => state.usersReducer.users
export const getTotalCount = (state: AppRootStateType) => state.usersReducer.usersTotalCount
export const getCurrentPage = (state: AppRootStateType) => state.usersReducer.currentPage
export const getPageSize = (state: AppRootStateType) => state.usersReducer.pageSize
export const getFollowingInProgress = (state: AppRootStateType) => state.usersReducer.followingInProgress

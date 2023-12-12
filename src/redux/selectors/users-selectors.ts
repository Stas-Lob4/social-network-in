import {AppRootStateType} from '../store';

export const getUsers = (state: AppRootStateType) => state.usersReducer.users
export const getTotalCount = (state: AppRootStateType) => state.usersReducer.userTotalCount
export const getCurrentPage = (state: AppRootStateType) => state.usersReducer.currentPage
export const getPageSize = (state: AppRootStateType) => state.usersReducer.pageSize
export const getFollowingInProgress = (state: AppRootStateType) => state.usersReducer.followingInProgress
export const getI = (state: AppRootStateType) => state.usersReducer.followingInProgress
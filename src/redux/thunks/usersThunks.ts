import { Dispatch } from 'redux';
import {instance} from '../../api/api-utils';
import {
    followAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFollowingProgressAC,
    unfollowAC
} from '../reducers/usersReducer';
import {usersApi} from '../../api/users-api';
import {AppThunk} from '../store';

export const getUsersTC = (): AppThunk => (dispatch: Dispatch) => {
    usersApi.getUsers()
        .then(response => {
            dispatch(setUsersAC(response.data.items))
            dispatch(setUsersTotalCountAC(response.data.totalCount))
        })
}

export const followTC = (userId: number): AppThunk => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgressAC(true, userId))
    usersApi.follow(userId)
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(followAC(userId));
                dispatch(toggleIsFollowingProgressAC(false, userId))
            }
        })
}

export const unfollowTC = (userId: number): AppThunk => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgressAC(true, userId))
    usersApi.unfollow(userId)
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(toggleIsFollowingProgressAC(false, userId))
                dispatch(unfollowAC(userId));
            }
        })
}
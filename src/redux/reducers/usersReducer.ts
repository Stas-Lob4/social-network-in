import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {usersThunks} from '../thunks/usersThunks';

export type UserType = {
    name: string,
    id: number,
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

let initialState = {
    users: [],
    pageSize: 10,
    usersTotalCount: 0,
    currentPage: 0,
    followingInProgress: []
} as InitStateType

type InitStateType = {
    users: UserType[]
    pageSize: number,
    usersTotalCount: number,
    currentPage: number,
    followingInProgress: number[]
}

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        follow: (state, action: PayloadAction<{ userId: number }>) => {
            state.users = state.users.map(u => {
                if (u.id === action.payload.userId) {
                    return {...u, followed: true}
                }
                return u;
            })
        },
        unfollow: (state, action: PayloadAction<{ userId: number }>) => {
            state.users = state.users.map(u => {
                if (u.id === action.payload.userId) {
                    return {...u, followed: false}
                }
                return u;
            })
        },
        setUsers: (state, action: PayloadAction<{ users: UserType[] }>) => {
            state.users = action.payload.users
        },
        setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
            state.currentPage = action.payload.currentPage
        },
        setUsersTotalCount: (state, action: PayloadAction<{ usersTotalCount: number }>) => {
            state.usersTotalCount = action.payload.usersTotalCount
        },
        toggleIsFollowingProgress:
            (state, action: PayloadAction<{ isFetching: boolean, userId: number }>) => {
                state.followingInProgress = action.payload.isFetching
                        ? [...state.followingInProgress, action.payload.userId]
                        : state.followingInProgress.filter(id => id != action.payload.userId)
                }
    },
    extraReducers: builder => {
        builder
            .addCase(usersThunks.fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload.users
                state.usersTotalCount = action.payload.totalCount
            })
            .addCase(usersThunks.follow.fulfilled, (state, action) => {
                state.users = state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            })
            .addCase(usersThunks.unfollow.fulfilled, (state, action) => {
                state.users = state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            })
            .addCase(usersThunks.fetchUserCountForPagination.fulfilled, (state, action) => {
                state.users = action.payload.users
                state.currentPage = action.payload.currentPage
            })
    }
})
export const usersReducer = slice.reducer
export const usersActions = slice.actions
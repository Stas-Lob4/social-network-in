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

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUserType = ReturnType<typeof setUsersAC>
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
type SetUsersTotalCountType = ReturnType<typeof setUsersTotalCountAC>
type ToggleIsFollowingProgressAction = ReturnType<typeof toggleIsFollowingProgressAC>
type ActionType = FollowType | UnfollowType | SetUserType | SetCurrentPageType | SetUsersTotalCountType
     | ToggleIsFollowingProgressAction

let initialState = {
    users: [],
    pageSize: 10,
    userTotalCount: 0,
    currentPage: 0,
    followingInProgress: []
}

type InitStateType = {
    users: UserType[]
    pageSize: number,
    userTotalCount: number,
    currentPage: number,
    followingInProgress: number[]
}
export const usersReducer = (state: InitStateType = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS": {
            console.log('Add user')
            return { ...state, users: [ ...action.users ]}
        }
        case 'SET-CURRENT-PAGE':{
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-USER-TOTAL-COUNT':{
            return {...state, userTotalCount: action.totalUsersCount}
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':{
            return {
                ...state,
                followingInProgress : action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}



export const followAC = (userId: number) => ({type: "FOLLOW", userId }as const)
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId }as const)
export const setUsersAC = (users: UserType[]) => ({type: "SET-USERS", users }as const)
export  const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export  const setUsersTotalCountAC = (totalUsersCount: number) => ({type: 'SET-USER-TOTAL-COUNT', totalUsersCount} as const)
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) =>
        ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId} as const)

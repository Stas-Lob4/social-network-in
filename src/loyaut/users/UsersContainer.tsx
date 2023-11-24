import {AppRootStateType, ThunkActionType} from '../../redux/store';
import {AnyAction, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Users} from './Users/Users';
import {setCurrentPageAC, setUsersAC, setUsersTotalCountAC, UserType} from '../../redux/reducers/users-reducer';
import React from 'react';
import {usersApi} from '../../api/users-api';
import {followTC, getUsersTC, unfollowTC} from '../../redux/thunks/users-thunks';
import {WithAuthRedirect, WithAuthRedirectPropsType} from '../../hoc/withAuthRedirect';
import {ThunkDispatch} from 'redux-thunk';


type StateType = {}

class UsersContainer extends React.Component<UsersPropsType, StateType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersTC()
        }
    }

    onPageChanged = (pageNumber: number) => {
        usersApi.getCurrentPage(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(pageNumber)
            });
    }

    render() {
        return <Users
            users={this.props.users}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            followingInProgress={this.props.followingInProgress}

            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
        />
    }
}

type MapStatePropsType = {
    users: UserType[]
    totalCount: number
    currentPage: number
    pageSize: number
    followingInProgress: number[]
    isAuth: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsersTC: () => void
}
let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersReducer.users,
        totalCount: state.usersReducer.userTotalCount,
        currentPage: state.usersReducer.currentPage,
        pageSize: state.usersReducer.pageSize,
        followingInProgress: state.usersReducer.followingInProgress,
        isAuth: state.authReducer.isAuth
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<AppRootStateType, unknown, AnyAction>): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followTC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowTC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        getUsersTC: () => {
            dispatch(getUsersTC())
        }
    }
}

const AuthRedirectComponent = WithAuthRedirect(UsersContainer)


export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export type UsersPropsType = MapStatePropsType
    & MapDispatchPropsType
    & WithAuthRedirectPropsType

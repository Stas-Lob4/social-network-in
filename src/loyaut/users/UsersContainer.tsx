import {AppDispatch, AppRootStateType} from '../../redux/store';
import {connect} from 'react-redux';
import {Users} from './Users/Users';
import {setCurrentPageAC, setUsersAC, setUsersTotalCountAC, UserType} from '../../redux/reducers/users-reducer';
import React from 'react';
import {usersApi} from '../../api/users-api';
import {followTC, getUsersTC, unfollowTC} from '../../redux/thunks/users-thunks';
import {WithAuthRedirect, WithAuthRedirectPropsType} from '../../hoc/withAuthRedirect';
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalCount,
    getUsers
} from '../../redux/selectors/users-selectors';
import {getIsAuth} from '../../redux/selectors/auth-selectors';


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
        users: getUsers(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => {
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

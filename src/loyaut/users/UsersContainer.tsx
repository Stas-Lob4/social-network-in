import {AppRootStateType} from '../../redux/store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Users} from './Users/Users';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from '../../redux/users-reducer';
import {instance} from '../../api/api-utils';
import React from 'react';
import {usersApi} from '../../api/users-api';


type StateType = {}

class UsersContainer extends React.Component<UsersPropsType, StateType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            instance.get(`users`)
                .then(response => {
                    console.log('usersCount', response.data.totalCount)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                })
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

            setUsers={this.props.setUsers}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setTotalCount={this.props.setTotalCount}
            setCurrentPage={this.props.setCurrentPage}
            onPageChanged={this.onPageChanged}
        />
    }
}

type MapStatePropsType = {
    users: UserType[]
    totalCount: number
    currentPage: number
    pageSize: number
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
}
let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersReducer.users,
        totalCount: state.usersReducer.userTotalCount,
        currentPage: state.usersReducer.currentPage,
        pageSize: state.usersReducer.pageSize
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            usersApi.follow(userId)
                .then(resp => {
                    if (resp.data.resultCode === 0) {
                        console.log('follow', resp.data)
                        dispatch(followAC(userId));
                    } else {
                        console.log('error follow')
                    }
                })
        },
        unfollow: (userId: number) => {
            usersApi.unfollow(userId)
                .then(resp => {
                    if (resp.data.resultCode === 0) {
                        console.log('unfollow')
                        dispatch(unfollowAC(userId));
                    } else {
                        console.log('error unfollow')
                    }
                })
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer)
export type UsersPropsType = MapStatePropsType
    & MapDispatchPropsType
    & {}

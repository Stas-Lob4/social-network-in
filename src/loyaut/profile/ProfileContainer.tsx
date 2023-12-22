import React from 'react';
import {Profile} from './Profile';
import {ProfileType} from '../../redux/reducers/profileReducer';
import {AppDispatch, AppRootStateType} from '../../redux/store';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from '../../utils/withRouter';
import {NavigateFunction, Params} from 'react-router';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {setUserProfileTC, setUserStatusTC, updateUserStatusTC} from '../../redux/thunks/profileThunk';
import {redirect} from 'react-router-dom';
import {UserType} from '../../redux/reducers/usersReducer';
import {getUsersTC} from '../../redux/thunks/usersThunks';
import {usersApi} from '../../api/users-api';


type StateType = {
    userId: number | undefined
}

class ProfileContainer extends React.Component<ProfilePropsType, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            userId: undefined
        }

    }



    componentDidMount() {
        let userId = this.props.router.params.userId ? +this.props.router.params.userId : null;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                redirect('/login')
            } else {
                this.props.setUserProfile(userId)
                this.setState({userId})
            }
        } else {
            this.props.setUserProfile(userId)
            this.setState({userId})
        }

    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<StateType>, snapshot?: any) {
        let userId: number | undefined = this.props.router.params.userId ? +this.props.router.params.userId : undefined;
        if (!userId) {
            userId = this.props.userId ?? 11111;
        }
        if (prevState.userId === userId) {
            console.log('gap', userId)
            return;
        }
        console.log('profile', userId)
        this.props.setUserProfile(userId)
        this.setState({userId})
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        setStatus={this.props.updateStatusProfile}
                        status={this.props.status}
                        users={this.props.users}
        />;
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
    userId: number | null
    status: string
    users: UserType[]
    userTotalCount: number
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        userId: state.authReducer.userId,
        profile: state.profileReducer.profile,
        isAuth: state.authReducer.isAuth,
        status: state.profileReducer.status,
        users: state.usersReducer.users,
        userTotalCount: state.usersReducer.userTotalCount
    }
}

type MapDispatchToPropsType = {
    setUserProfile: (id: number) => void
    updateStatusProfile: (status: string) => void
    getUsersTC: () => void
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (id: number) => {
            dispatch(setUserProfileTC(id))
            dispatch(setUserStatusTC(id))
        },
        updateStatusProfile: (status: string) => {
            dispatch(updateUserStatusTC(status))
        },
        getUsersTC: () => {
            dispatch(getUsersTC())
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)


type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & {
    router: {
        location: Location
        navigate: NavigateFunction
        params: Readonly<Params<string>>
    }
}
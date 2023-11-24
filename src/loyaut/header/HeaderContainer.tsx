import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {AnyAction, Dispatch} from 'redux';
import {setAuthUserDataTC} from '../../redux/thunks/auth-thunk';
import {ThunkDispatch} from 'redux-thunk';

type PropsType = {}
class HeaderContainer extends React.Component<HeaderPropsType, PropsType> {
    componentDidMount() {
        this.props.setUserData()
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth}/>
    }
}
type MapStateToPropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        userId: state.authReducer.userId,
        email: state.authReducer.email,
        login: state.authReducer.login,
        isAuth: state.authReducer.isAuth
    }
}

type MapDispatchToPropsType = {
    setUserData: () => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppRootStateType, unknown, AnyAction>): MapDispatchToPropsType => {
    return {
        setUserData: () => {
            dispatch(setAuthUserDataTC())
        }
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>
(mapStateToProps, mapDispatchToProps)(HeaderContainer)
type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType & {}
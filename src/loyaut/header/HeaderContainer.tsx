import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppDispatch, AppRootStateType} from '../../redux/store';
import {setAuthUserDataTC} from '../../redux/thunks/auth-thunk';

type PropsType = {}
class HeaderContainer extends React.Component<HeaderPropsType, PropsType> {
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
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        setUserData: () => {
            dispatch(setAuthUserDataTC())
        }
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>
(mapStateToProps, mapDispatchToProps)(HeaderContainer)
type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType & {}
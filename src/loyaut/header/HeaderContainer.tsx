import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {Dispatch} from 'redux';
import {instance} from '../../api/api-utils';
import {setAuthUserDataAC} from '../../redux/auth-reducer';

type PropsType = {}
class HeaderContainer extends React.Component<HeaderPropsType, PropsType> {
    componentDidMount() {
        instance.get(`auth/me`)
            .then(response => {
                console.log('Auth', response.data)
                if(response.data.resultCode === 0){
                    this.props.setUserData(response.data.userId, response.data.email, response.data.login)
                }
            })
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
    setUserData: (userId: number, email: string, login: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserData: (userId: number, email: string, login: string) => {
            dispatch(setAuthUserDataAC(userId, email, login))
        }
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>
(mapStateToProps, mapDispatchToProps)(HeaderContainer)
type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType & {}
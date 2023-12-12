import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {Navigate} from 'react-router-dom';
import {loginProfileTC, setAuthUserDataTC} from '../../redux/thunks/auth-thunk';
import {LoginForm} from './LoginForm';
import {authApi, LoginDataType} from '../../api/auth-api';

export const Login = () => {
    const dispatch = useDispatch()
    useEffect(() => {

    }, []);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.authReducer.isAuth)

    const login = (data: LoginDataType) => {
        // dispatch(setAuthUserDataTC())
        console.log(data)
        dispatch(loginProfileTC(data))
    }

    return (
        <div>
            {isAuth ? <Navigate to={'/'}/>
                    : <LoginForm onSubmit={login}/>}
        </div>
    );
};


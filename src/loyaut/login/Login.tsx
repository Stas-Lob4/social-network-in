import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {Navigate} from 'react-router-dom';
import {loginProfileTC} from '../../redux/thunks/auth-thunk';
import {LoginForm} from './LoginForm';
import {LoginDataType} from '../../api/auth-api';

export const Login = () => {
    const dispatch = useDispatch()
    useEffect(() => {

    }, []);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.authReducer.isAuth)

    const login = (data: LoginDataType) => {
        dispatch(loginProfileTC(data))
    }

    return (
        <div>
            {isAuth ? <Navigate to={'/'}/>
                    : <LoginForm onSubmit={login}/>}
        </div>
    );
};


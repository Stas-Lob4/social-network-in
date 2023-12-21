import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {Navigate} from 'react-router-dom';
import {loginProfileTC} from '../../redux/thunks/authThunk';
import {LoginForm} from './LoginForm';
import {LoginDataType} from '../../api/auth-api';
import {Container} from '../../component/Container';
import {LoginSectionStyled} from './LoginSectionStyled';
import {FlexWrap} from '../../component/FlexWrap';

export const Login = () => {
    const dispatch = useDispatch()
    useEffect(() => {

    }, []);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.authReducer.isAuth)

    const login = (data: LoginDataType) => {
        dispatch(loginProfileTC(data))
    }

    return (
        <LoginSectionStyled>
            <Container>
                <FlexWrap justify={'center'} align={'center'}>
                    {isAuth ? <Navigate to={'/'}/>
                        : <LoginForm onSubmit={login}/>}
                </FlexWrap>
            </Container>
        </LoginSectionStyled>
    );
};



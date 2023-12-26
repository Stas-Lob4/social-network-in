import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../app/store';
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
    const captchaUrl = useSelector<AppRootStateType, string | null>(state => state.authReducer.captchaUrl)

    const login = (data: LoginDataType) => {
        dispatch(loginProfileTC(data))
    }
    if (isAuth){
        return <Navigate to={'/'}/>
    }

    return (
        <LoginSectionStyled>
            <Container>
                <FlexWrap justify={'center'} align={'center'}>
                    <LoginForm captchaUrl={captchaUrl} onSubmit={login}/>
                </FlexWrap>
            </Container>
        </LoginSectionStyled>
    );
};



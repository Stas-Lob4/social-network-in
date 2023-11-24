import React from 'react';
import {useDispatch} from 'react-redux';
import {setAuthUserDataAC} from '../../redux/reducers/auth-reducer';

export const Login = () => {
    const dispatch = useDispatch()
    const login = () => {
        dispatch(setAuthUserDataAC(24203, '', ''))
    }

    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    );
};

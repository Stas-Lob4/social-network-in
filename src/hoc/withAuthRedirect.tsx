import React, {Component, ComponentType} from 'react';
import {Navigate} from 'react-router-dom';
import {UsersPropsType} from '../loyaut/users/UsersContainer';

export type WithAuthRedirectPropsType = {
    isAuth: boolean;
};
export const WithAuthRedirect = <P extends object>(WrappedComponent: ComponentType<P & WithAuthRedirectPropsType>):
    React.FC<P & WithAuthRedirectPropsType>  => {
    const RedirectComponent: React.FC<P & WithAuthRedirectPropsType> = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'} />;
        return <WrappedComponent {...props} />;
    };

    return RedirectComponent;
};

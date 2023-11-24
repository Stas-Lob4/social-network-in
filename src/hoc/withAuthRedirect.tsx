import React, {Component, ComponentType} from 'react';
import {Navigate} from 'react-router-dom';


// export const withAuthRedirect = <P extends object>(Component: ComponentType<P & WithAuthRedirectPropsType>): React.FC<P & WithAuthRedirectPropsType> => {
//     const RedirectComponents: React.FC<P & WithAuthRedirectPropsType> = (props) => {
//         if(!props.isAuth) {
//             return <Navigate to = {'/login'}/>
//         }
//             return <Component {...props}/>
//     }
//     return RedirectComponents;
// }


type WithAuthRedirectPropsType = {
    isAuth: boolean;
}

// export const withAuthRedirect = <P extends object>(
//     WrappedComponent: ComponentType<P & WithAuthRedirectPropsType>
// ): React.FC<P & WithAuthRedirectPropsType> => {
//     const RedirectComponent: React.FC<P & WithAuthRedirectPropsType> = (props) => {
//         if (!props.isAuth) return <Navigate to={'/login'} />;
//         return <WrappedComponent {...props} />;
//     };
//
//     return RedirectComponent;
// };

const withAuthRedirect = <P extends object>(WrappedComponent: ComponentType<P & WithAuthRedirectPropsType>):
    React.ComponentClass<P & WithAuthRedirectPropsType> => {
    return class RedirectComponent extends Component<P & WithAuthRedirectPropsType> {
        render() {
            const { isAuth, ...restProps } = this.props;

            if (!isAuth) {
                return <Navigate to={'/login'} />;
            }

            return <WrappedComponent {...restProps} />;
        }
    };
};
import React, {FC, useEffect} from 'react';
import {Footer} from './loyaut/footer/Footer';
import {Navbar} from './loyaut/navbar/Navbar';
import {redirect, Route, Routes} from 'react-router-dom';
import {
    AppFooterStyled,
    AppHeaderStyled,
    AppMainNavbarStyled,
    AppMainRoutesStyled,
    AppMainStyled,
    AppStyled
} from './AppStyled';
import DialogsContainer from './loyaut/dialogs/DialogsContainer';
import UsersContainer from './loyaut/users/UsersContainer';
import ProfileContainer from './loyaut/profile/ProfileContainer';
import HeaderContainer from './loyaut/header/HeaderContainer';
import {Login} from './loyaut/login/Login';
import {connect, useSelector} from 'react-redux';
import {AppDispatch, AppRootStateType} from './redux/store';
import {compose} from 'redux';
import {withRouter} from './utils/withRouter';
import {setAuthUserDataTC} from './redux/thunks/auth-thunk';
import {HashLoader} from 'react-spinners';



type AppStateType = {}

class App extends React.Component<AppPropsType, AppStateType> {
    componentDidMount() {
        if(!this.props.initialApp){
            this.props.setUserData()
        }
    }

    render() {
        if(this.props.initialApp){
            return <AppStyled>
                <HashLoader
                    color={'red'}
                    size={250}
                />
            </AppStyled>
        }

        return (
            <AppStyled>
                <AppHeaderStyled>
                    <HeaderContainer/>
                </AppHeaderStyled>
                <AppMainStyled>
                    <AppMainNavbarStyled>
                        <Navbar/>
                    </AppMainNavbarStyled>
                    <AppMainRoutesStyled>
                        <Routes>
                            <Route path={'/'} element={<ProfileContainer/>}/>
                            <Route path={'/profile/:userId?'} element={<ProfileContainer/>}/>
                            <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                            <Route path={'/friends'} element={<UsersContainer/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                        </Routes>
                    </AppMainRoutesStyled>
                </AppMainStyled>
                <AppFooterStyled>
                    <Footer/>
                </AppFooterStyled>
            </AppStyled>
        );
    }
}

type MapStateToPropsType = {
    initialApp: boolean
    isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        initialApp: state.app.initialApp,
        isAuth: state.authReducer.isAuth
    }
}

type MapDispatchToPropsType = {
    setUserData: () => void
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        setUserData: () => {
            dispatch(setAuthUserDataTC())
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(App)

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType & {}


import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Navbar} from '../loyaut/navbar/Navbar';
import {Navigate, Route, Routes} from 'react-router-dom';
import HeaderContainer from '../loyaut/header/HeaderContainer';
import {Login} from '../loyaut/login/Login';
import {HashLoader} from 'react-spinners';
import {setAuthUserDataTC} from '../redux/thunks/authThunk';
import {AppDispatch, useAppSelector} from './store';
import {AppHeaderStyled, AppMainNavbarStyled, AppMainRoutesStyled, AppMainStyled, AppStyled} from './AppStyled';
import {Profile} from '../loyaut/profile/Profile';
import {Dialogs} from '../loyaut/dialogs/Dialogs';
import {Users} from '../loyaut/users/Users';
import {Chat} from '../loyaut/chat/Chat';

export const App = () => {
    const dispatch = useDispatch<AppDispatch>();
    const initialApp = useAppSelector(state => state.appReducer.initialApp)

    useEffect(() => {
        if (!initialApp) {
            dispatch(setAuthUserDataTC());
        }
    }, []);

    if (initialApp) {
        return (
            <AppStyled>
                <HashLoader color={'red'} size={250}/>
            </AppStyled>
        );
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
                        <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                        <Route path={'/profile/:userId?'} element={<Profile/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs/>}/>
                        <Route path={'/friends'} element={<Users/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/chat'} element={<Chat/>}/>
                    </Routes>
                </AppMainRoutesStyled>
            </AppMainStyled>
        </AppStyled>
    );
};




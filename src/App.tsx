import React, {FC, useEffect} from 'react';
import {Footer} from './loyaut/footer/Footer';
import {Navbar} from './loyaut/navbar/Navbar';
import {Profile} from './loyaut/profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {
    AppFooterStyled,
    AppHeaderStyled,
    AppMainNavbarStyled,
    AppMainRoutesStyled,
    AppMainStyled,
    AppStyled
} from './AppStyled';
import DialogsContainer from './loyaut/dialogs/DialogsContainer';
import {profileApi} from './api/profile-api';
import UsersContainer from './loyaut/users/UsersContainer';
import ProfileContainer from './loyaut/profile/ProfileContainer';
import HeaderContainer from './loyaut/header/HeaderContainer';
import {Login} from './loyaut/login/Login';


type AppPropsType = {}
export const App: FC<AppPropsType> = ({})=>  {

    useEffect(() => {
        profileApi.getProfile()
    });

    return(
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



import React from 'react';
import {Header} from './loyaut/header/Header';
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
import {Dialogs} from './loyaut/dialogs/Dialogs';

export function App() {
    return (
        <AppStyled>
            <AppHeaderStyled>
                <Header/>
            </AppHeaderStyled>
            <AppMainStyled>
                <AppMainNavbarStyled>
                    <Navbar/>
                </AppMainNavbarStyled>
                <AppMainRoutesStyled>
                    <Routes>
                        <Route path={'/'} element={<Profile/>}/>
                        <Route path={'/dialogs'} element={<Dialogs/>}/>
                    </Routes>
                </AppMainRoutesStyled>
            </AppMainStyled>
            <AppFooterStyled>
                <Footer/>
            </AppFooterStyled>
        </AppStyled>
    );
}



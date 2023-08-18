import React from 'react';
import {Header} from './component/header/Header';
import {Footer} from './component/footer/Footer';
import styled from 'styled-components';
import {Navbar} from './component/navbar/Navbar';
import {Profile} from './component/profile/Profile';
import {Route, Routes} from 'react-router-dom';

export function App() {
    return (
        <AppStyled>
            <AppHeaderStyled>
                <Header/>
            </AppHeaderStyled>
            <AppMainStyled>
                <Routes>
                    <Route path={'/'} element={<Profile/>}/>
                </Routes>
                <AppMainNavbarStyled>
                    <Navbar/>
                </AppMainNavbarStyled>
            </AppMainStyled>
            <AppFooterStyled>
                <Footer/>
            </AppFooterStyled>
        </AppStyled>
    );
}




export const AppStyled = styled.div`
  
`

export const AppHeaderStyled = styled.header`

`
export const AppMainStyled = styled.main`

`
export const AppFooterStyled = styled.footer`

`

export const AppMainNavbarStyled = styled.div`
    
`
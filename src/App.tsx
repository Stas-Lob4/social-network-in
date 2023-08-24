import React from 'react';
import {Header} from './loyaut/header/Header';
import {Footer} from './loyaut/footer/Footer';
import styled from 'styled-components';
import {Navbar} from './loyaut/navbar/Navbar';
import {Profile} from './loyaut/profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {Container} from './component/Container';

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
                    </Routes>
                </AppMainRoutesStyled>
            </AppMainStyled>
            <AppFooterStyled>
                <Footer/>
            </AppFooterStyled>
        </AppStyled>
    );
}


export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141414;
  font-family: 'Inknut Antiqua';
  height: 100vh;
`

export const AppHeaderStyled = styled.header`
  max-width: 1150px;
  min-height: 50px;
  width: 100%;
`
export const AppMainStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 1150px;
  width: 100%;
`
export const AppFooterStyled = styled.footer`
  width: 100%;
  max-width: 1150px;
  min-height: 50px;
`

export const AppMainRoutesStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const AppMainNavbarStyled = styled.div`
  
  max-width: 150px;
  width: 100%;
`


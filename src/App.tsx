import React, {FC} from 'react';
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
import {ActionType, StateType, StoreType} from './redux/state';


type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}
export const App: FC<AppPropsType> = ({state, dispatch}) =>  {
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
                        <Route path={'/'} element={<Profile stateProfile={state.profilePage}
                                                            dispatch = {dispatch}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs users={state.users} dispatch={dispatch}/>}/>
                    </Routes>
                </AppMainRoutesStyled>
            </AppMainStyled>
            <AppFooterStyled>
                <Footer/>
            </AppFooterStyled>
        </AppStyled>
    );
}



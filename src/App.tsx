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
import {StateType, StoreType} from './redux/state';


type AppPropsType = {
    state: StateType
    store: StoreType
}
export const App: FC<AppPropsType> = ({state, store}) =>  {
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
                                                            addPost={store.addPost.bind(store)}
                                                            updateNewPostText={store.updateNewPostText.bind(store)}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs users={state.users}/>}/>
                    </Routes>
                </AppMainRoutesStyled>
            </AppMainStyled>
            <AppFooterStyled>
                <Footer/>
            </AppFooterStyled>
        </AppStyled>
    );
}



import {AnyAction} from 'redux';
import {profileReducer} from '../redux/reducers/profileReducer';
import {dialogReducer} from '../redux/reducers/dialogReducer';
import {usersReducer} from '../redux/reducers/usersReducer';
import {authReducer} from '../redux/reducers/authReducer';
import {ThunkAction} from 'redux-thunk';
import {appReducer} from './appReducer';
import {chatReducer} from '../redux/reducers/chatReducer';
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector} from 'react-redux';




export const store = configureStore({
    reducer: {
        profileReducer: profileReducer,
        dialogReducer: dialogReducer,
        usersReducer: usersReducer,
        authReducer: authReducer,
        appReducer: appReducer,
        chatReducer: chatReducer
    }
})

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ThunkActionType = ThunkAction<void, AppRootStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
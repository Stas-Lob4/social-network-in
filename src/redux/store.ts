import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {profileReducer} from "./reducers/profileReducer";
import {dialogReducer} from "./reducers/dialogReducer";
import {sidebarReducer} from "./reducers/sidebarReducer";
import {usersReducer} from './reducers/usersReducer';
import {authReducer} from './reducers/authReducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {appReducer} from './reducers/appReducer';

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    usersReducer: usersReducer,
    authReducer: authReducer,
    appReducer: appReducer
    //sidebarReducer: sidebarReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
export type ThunkActionType = ThunkAction<void, AppRootStateType, unknown, AnyAction>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

export default store
import {AnyAction, applyMiddleware,combineReducers ,legacy_createStore as createStore} from 'redux';
import {profileReducer} from "./reducers/profile-reducer";
import {dialogReducer} from "./reducers/dialog-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from './reducers/users-reducer';
import {authReducer} from './reducers/auth-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {appReducer} from './reducers/app-reducer';

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    usersReducer: usersReducer,
    authReducer: authReducer,
    app: appReducer
    //sidebarReducer: sidebarReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
export type ThunkActionType = ThunkAction<void, AppRootStateType, unknown, AnyAction>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

export default store
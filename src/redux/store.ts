import {combineReducers ,legacy_createStore as createStore} from 'redux';
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    usersReducer: usersReducer,
    authReducer: authReducer
    //sidebarReducer: sidebarReducer
})

const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export default store
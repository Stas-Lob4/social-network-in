import {AppRootStateType} from '../store';

export const getIsAuth = (state: AppRootStateType) => state.authReducer.isAuth
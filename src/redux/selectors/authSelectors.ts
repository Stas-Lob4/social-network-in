import {AppRootStateType} from '../../app/store';

export const getIsAuth = (state: AppRootStateType) => state.authReducer.isAuth
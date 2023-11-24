import {Dispatch} from 'redux';
import {setAuthUserDataAC} from '../reducers/auth-reducer';
import {authApi} from '../../api/auth-api';
import {AppThunk} from '../store';

export const setAuthUserDataTC = ():AppThunk => (dispatch: Dispatch) => {
    authApi.getAuth()
        .then(response => {
            console.log('Auth', response.data)
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(response.data.userId, response.data.email, response.data.login))
            }
        })
}
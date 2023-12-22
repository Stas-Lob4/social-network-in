import {Dispatch} from 'redux';
import {getCaptchaUrlAC, logoutAC, setAuthUserDataAC} from '../reducers/authReducer';
import {authApi, LoginDataType} from '../../api/auth-api';
import {AppDispatch} from '../store';
import {profileApi} from '../../api/profile-api';
import {setUserProfileAC} from '../reducers/profileReducer';
import {setInitialAppAC} from '../reducers/appReducer';
import {securityApi} from '../../api/securityApi';


export const setAuthUserDataTC = () => (dispatch: Dispatch) => {
    dispatch(setInitialAppAC(true))
    authApi.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login))
                profileApi.getProfile(response.data.data.id).then(res => {
                    dispatch(setUserProfileAC(res.data))
                })
            }
        })
        .finally(() => dispatch(setInitialAppAC(false)))
}

export const loginProfileTC = (data: LoginDataType) => (dispatch: AppDispatch) => {
    authApi.addAuth(data)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setAuthUserDataTC())
            } else if(res.data.resultCode === 10){
                dispatch(getCaptchaUrlTC())
            }
        })
}

export const logoutProfileTC = ()=> (dispatch: AppDispatch) => {
    authApi.deleteAuth()
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(logoutAC())
            }
    })
}

export const getCaptchaUrlTC = () => async (dispatch: AppDispatch) => {
    const res = await securityApi.getCaptchaUrl()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlAC(captchaUrl))
}
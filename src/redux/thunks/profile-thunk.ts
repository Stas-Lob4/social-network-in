import {setUserProfileAC, setUserStatusAC} from '../reducers/profile-reducer';
import {AppDispatch, AppThunk} from '../store';
import {profileApi} from '../../api/profile-api';

export const setUserProfileTC = (id: number) => (dispatch: AppDispatch) => {
    profileApi.getProfile(id)
        .then(response => {
            console.log('ProfileInfo', response.data)
            dispatch(setUserProfileAC(response.data))
        })
}

export const setUserStatusTC = (id: number) => (dispatch: AppDispatch) => {
    profileApi.getStatusProfile(id)
        .then(res =>{
            dispatch(setUserStatusAC(res.data))
        })
}

export const updateUserStatusTC = (status: string) => (dispatch: AppDispatch) => {
    profileApi.updateStatusProfile(status)
        .then(res=>{
            if(res.data.resultCode === 0){
                dispatch(setUserStatusAC(status))
            }
        })
}
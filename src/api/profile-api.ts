import {instance} from './api-utils';

export const profileApi = {
    getProfile(){
        console.log(instance.put('auth/me'))
        return instance.get('auth/me')
    }
}
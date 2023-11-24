import {instance} from './api-utils';

export const profileApi = {
    getProfile(){
        return instance.get('profile')
    }
}
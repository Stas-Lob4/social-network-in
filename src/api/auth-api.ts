import {instance} from './api-utils';

export const authApi = {
    getAuth(){
        return instance.get(`auth/me`)
    }
}
import axios from "axios";

export const instance=axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        'API-KEY': '09d426fa-75c3-46ec-be6d-1e19a1c6ac60'
    }
})
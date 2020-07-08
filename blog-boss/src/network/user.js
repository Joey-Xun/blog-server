import {request} from "./request";
export default {
    login(params) {
        return request({
            method: 'post',
            url:'/api/user/login',
            data: params
        })
    }
}
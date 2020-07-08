import {request} from "network/request";
export default {
    publish(params) {
        return request({
            url:"/api/artical/saveArtical",
            params: params
        })
    },
    getArticalList(params) {
        return request({
            url:"/api/artical/getArticalList",
            params: params
        })
    },
    getArticalDetail(params) {
        return request({
            url:"/api/artical/getArticalDetail",
            params: params
        })
    },
    deleteArticalById(params) {
        return request({
            url:"/api/artical/deleteArticalById",
            params: params
        })
    }
}
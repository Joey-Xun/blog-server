import {request} from "./request";
export default {
    publish(params) {
        return request({
            url:'/api/article/new',
            params: params
        })
    },
    getArticleList(params) {
        return request({
            url:'/api/article/list',
            params: params
        })
    },
    getArticleDetail(params) {
        return request({
            url:'/api/article/detail',
            params: params
        })
    },
    updateArticleById(params) {
        return request({
            url:'/api/article/update',
            params: params
        })
    },
    deleteArticleById(params) {
        return request({
            url:'/api/article/delete',
            params: params
        })
    }
}
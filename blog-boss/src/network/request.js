import axios from 'axios'
export function request(config) {
        // 1.创建axios实例
        const instance = axios.create({
            baseURL: 'http://127.0.0.1:3000',
            timeout: 5000,
            withCredentials: true
        })

        // 2.设置请求拦截
        instance.interceptors.request.use(config=>{
            return config
        }, err=>{
            return Promise.reject(err)
        })

        // 3.设置响应拦截
        instance.interceptors.response.use(res=>{
            return res.data
        },err=>{
            return Promise.reject(err)
        })

        // 4.返回实例，该实例为promise对象
        return instance(config)
    }
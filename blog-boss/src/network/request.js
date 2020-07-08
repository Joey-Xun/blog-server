import axios from 'axios'
export default {
    init() {
        window.$http = axios.create({
            headers: {
                "Content-type": "application/json"
            }
        });
        this.setInterceptor();
    },
    setInterceptor() {
        $http.interceptors.request.use(
            config => {
                return config
            },
            err => {
                return Promise.reject(err)
            });
        $http.interceptors.response.use(
            response => {
                if (response.data.data.code == 401) {
                    location.href = "/#/login";
                }
                return response
            },
            error => {
                return Promise.reject(error.response.status)
            });
    },
    get(url, params) {
        if(!window.$http) {
            this.init();
        }
        return new Promise((resolve, reject) =>{
            $http.get(url, {
                params: params
            }).then(res => {
                resolve(res.data);
            }).catch(err =>{
                reject(err.data)
            });
        });
    },
    post(url, params) {
        if(!window.$http) {
            this.init();
        }
        return new Promise((resolve, reject) => {
            $http.post(url, params)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err =>{
                    reject(err.data)
                })
        });
    }
}
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index=()=>import('views/index/Index.vue')
const Login=()=>import('views/login/Login.vue')
const Article=()=>import('components/content/index/Article.vue')
const List=()=>import('components/content/index/List.vue')



const routes=[
    {
        path: '/',
        component: Index,
        redirect: '/login',
        children: [
            {
                path: "article",
                component: Article
            },
            {
                path: "list",
                component: List
            }
        ]
    },
    {
        path: "/login",
        component: Login
    }
]

const router=new VueRouter({
    routes,
    mode: 'history'
})

export default router
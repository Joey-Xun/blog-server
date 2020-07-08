import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home=()=>import('views/home/Home.vue')
const About=()=>import('views/about/About.vue')
const NotFound=()=>import('views/notFound/NotFound.vue')
const Details=()=>import('views/details/Details.vue')


const routes=[
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/details',
        component: Details
    },
    {
        path: '/notfound',
        component: NotFound
    }
]

const router=new VueRouter({
    routes,
    mode: 'history'
})

export default router
<template>
    <header class="header">
        <img src="~assets/img/logo.gif" alt="" class="logo">
        <ul class="menu-btn" @click="showMenuItem">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="menu-list" v-show="isShow">
            <li><router-link to='/' @click.native="hideMenuItem">首页</router-link></li>
            <li><router-link to='/about' @click.native="hideMenuItem">关于</router-link></li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: "TopNav",
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            showMenuItem() {
                this.isShow = !this.isShow;
            },
            hideMenuItem() {
                this.isShow = false;
            }
        }
    }
</script>

<style scoped>
    .header {
        background-image: linear-gradient(#ffc0cb 0%, #ffb6c1 10%, #87cefa 100%);
        height: 0.8rem;
        position: relative;
        line-height: 0.53rem;
        color: #fff;
    }
    .logo {
        width: 0.7rem;
        text-align: center;
        vertical-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .menu-btn {
        width: 0.5rem;
        height: 0.15rem;
        position: absolute;
        top: 0.35rem;
        right: 0.15rem;
        overflow:hidden;
    }
    .menu-btn li {
        width: 0.1rem;
        height: 0.1rem;
        background: #fff;
        float: left;
        margin-right:0.06rem;
        border-radius: 100%;
    }
    .menu-list {
        position: absolute;
        width: 100%;
        z-index: 1000;
        left: 0;
        top: 0.81rem;
        background-image: linear-gradient(#ffc0cb 0%, #ffb6c1 10%, #87cefa 100%);
        font-size: 0.2rem;
        text-align: center;
        line-height: 0.4rem;
    }
    .menu-list li {
        margin-top: 0.05rem;
        border-bottom: 1px solid #fff;
    }
    .menu-list li a {
        color:#fff;
    }
</style>
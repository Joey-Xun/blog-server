<template>
    <div id="content">
        <div class="login-box">
            <div class="title">个人博客后台管理系统</div>
            <div class="login">
                <p class="login-title">用户登录</p>
                <el-input placeholder="请输入用户名" class="user-name" v-model="user.username"></el-input>
                <el-input placeholder="请输如密码" class="user-name" show-password v-model="user.password" @keyup.enter.native="login"></el-input>
                <el-button type="primary" class="login-btn" @click="login">登录</el-button>
            </div>
        </div>
        <el-alert
                title="用户名或密码错误"
                type="error"
                v-show="isShowAlert"
                center
                show-icon
                @close = "onAlertClose">
        </el-alert>
    </div>
</template>

<script>
    import user from "network/user";
    import md5 from 'md5'
    export default {
        name: "Login",
        data() {
            return {
                isShowAlert: false,
                user: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                user.login({username: this.user.username, password: md5(this.user.password+'abc')}).then((res)=> {
                    if(res.errno === 0) {
                        sessionStorage.setItem('username',this.user.username)
                        this.$router.push({path: '/list'});
                    } else {
                        this.isShowAlert = true;
                    }
                });
            },
            onAlertClose() {
                this.isShowAlert = false;
            }
        }
    }
</script>

<style>
    .user-name input {
        height: 60px;
        border: 1px solid #9eacf2;
        background-color: #e8f2fe;
        margin-bottom: 35px;
    }
    .login-btn.el-button--primary {
        display: block;
        width: 100%;
        height: 60px;
        background: #9eacf2;
        border: none;
    }
</style>
<style scoped>
    #content {
        position: relative;
        width: 100vw;
        height: 100vh;
        background: url('~assets/img/bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .title {
        text-align: center;
        color: #fff;
        font-size: 60px;
    }
    .login-box {
        width: 672px;
        height: 646px;
        position: absolute;
        left:50%;
        top:50%;
        margin-top: -323px;
        margin-left: -336px;
    }
    .login {
        width: 444px;
        height: 430px;
        margin: auto;
        background: #e8f3fe;
        margin-top: 60px;
        border-radius: 5px;
        box-shadow: 1px 1px 3px #444;
        padding: 40px;
    }
    .login-title {
        text-align: center;
        margin-top: 40px;
        font-size: 30px;
        color: #9eacf2;
        margin-bottom: 30px;
    }
</style>
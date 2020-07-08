<template>
    <div id="top">
        个人博客
        <div class="login-box"><span class="welcome">欢迎</span>{{username}}</div>
    </div>
</template>
<script>
export default {
    name: "top-nav",
    data() {
        return {
            username: ""
        }
    },
    mounted() {
        const username=sessionStorage.getItem('username')
        if(username) {
           this.username = username;
        } else {
           this.$router.push("/login")
        }
    }
}
</script>
<style scoped>
    #top {
        height: 88px;
        background-image:url('~assets/img/top.png');
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 1px 1px 1px rgba(0,0,0,.1);
        line-height: 88px;
        color: #fff;
        padding-left: 40px;
        font-size: 30px;
    }
    .login-box {
        float:right;
        margin-right: 30px;
        font-size: 16px;
    }
    .welcome {
        margin-right: 10px;
    }
</style>
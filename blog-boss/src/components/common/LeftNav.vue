<template>
    <div id="content">
        <div class="menu-item">
            <img src="~assets/img/home.png" />
            <span>首页</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "left-nav",
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
    #content {
        float:left;
        width: 15%;
        height: 100%;
        background-color:#338ace;
    }
    .menu-item {
        height: 50px;
        line-height: 50px;
        padding: 30px;
        cursor: pointer;
    }
    .menu-item img {
        display: inline-block;
        width: 25px;
    }
    .menu-item span {
        position: relative;
        color: #fff;
        top: -5px;
        left: 20px;
        font-weight: bold;
    }
</style>
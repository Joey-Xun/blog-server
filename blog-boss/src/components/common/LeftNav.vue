<template>
    <div id="content">
        <div class="menu-item">
            <img src="../../../assets/images/home.png" width="25px">
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
    .menu-item {
        height: 50px;
        line-height: 50px;
        padding: 20px;
        cursor: pointer;
    }
    .menu-item img , .menu-item span {
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        font-size: 14px;
    }
    .menu-item span {
        position: relative;
        top: -5px;
        left: 20px;
        font-weight: bold;
    }
</style>
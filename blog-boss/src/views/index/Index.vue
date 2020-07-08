<template>
    <div>
        <top-nav></top-nav>
        <div class="content">
            <left-nav></left-nav>
            <div class="right-box">
                <router-view class="main"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>
    .content {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: -1;
    }
    .right-box {
        float: left;
        width: 85%;
    }
    .main {
        padding: 50px;
    }
</style>
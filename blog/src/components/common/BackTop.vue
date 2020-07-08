<template>
    <div class="back-top"></div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
    .back-top {
        position: fixed;
        right: 0.08rem;
        bottom: 0.2rem;
        width: 0.43rem;
        height: 0.43rem;
        background: url("~assets/img/top.png") no-repeat center center;
        background-size: contain;
    }
</style>
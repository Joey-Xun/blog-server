<template>
    <div id="content">
        <h3 class="title">404</h3>
        <div class="not-found-content">
            Not Found
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
    #content {
        padding: 0.2rem;
    }
    .title {
        font-size: 0.4rem;
    }
    .not-found-content {
        font-size: 0.3rem;
        padding-top: 0.2rem;
        color:#000;
    }
</style>
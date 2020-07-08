<template>
    <div>
        <div id="content">
            <h3 class="title">关于</h3>
            <div class="about-content">
                This is a page about "About"
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    #content {
        padding: 0.2rem;
    }
    .title {
        font-size: 0.3rem;
    }
    .about-content {
        font-size: 0.2rem;
        padding-top: 0.2rem;
        color:#888;
        line-height: 0.2rem;
        word-wrap: break-word;
    }
</style>
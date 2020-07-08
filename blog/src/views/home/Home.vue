<template>
    <div id="home">
        <scroll class="content"
                ref="scroll"
                :probe-type="3"
                :pull-up-load="true"
                @pullingUp="loadMore"
                @scroll="contentScroll">
            <div class="article-content">
                <div class="notify">
                    <span class="horn">&#xe628;</span>
                    <span class="notify-content">公告: 欢迎来到我的博客</span>
                </div>
                <div class="artical-item">
                    <h3 class="title">javascript事件驱动原理</h3>
                    <p class="publish_date">发布于: 2020-04-08</p>
                    <div class="artical-content">
                        SSR大家肯定都不陌生，通过服务端渲染，可以优化SEO抓取，提升首页加载速度等，我在学习SSR的时候，看过很多文章，有些对我有很大的启发作用，有些就只是照搬官网文档。通过几天的学习，我对SSR有了一些了解，也从头开始完整的配置出了SSR的开发环境，所以想通过这篇文章，总结一些经验，同时希望能够对学习SSR的朋友起到一点帮助。
                        我会通过五个步骤，一步步带你完成SSR的配置：
                        纯浏览器渲染，
                        服务端渲染，不包含Ajax初始化数据
                        服务端渲染，包含Ajax初始化数据
                        服务端渲染，使用serverBundle和clientManifest进行优化
                        一个完整的
                        如果你现在对于我上面说的还不太了解，没有关系，跟着我一步步向下走，最终你也可以独立配置一个SSR开发项目，所有源码我会放到github上，大家可以作为参考。
                    </div>
                    <div class="comment-box">
                        <a href="javascript:void(0)">评论</a>
                        <a href="javascript:void(0)">点赞</a>
                    </div>
                </div>
                <div class="artical-item">
                    <h3 class="title">javascript事件驱动原理</h3>
                    <p class="publish_date">发布于: 2020-04-08</p>
                    <div class="artical-content">
                        SSR大家肯定都不陌生，通过服务端渲染，可以优化SEO抓取，提升首页加载速度等，我在学习SSR的时候，看过很多文章，有些对我有很大的启发作用，有些就只是照搬官网文档。通过几天的学习，我对SSR有了一些了解，也从头开始完整的配置出了SSR的开发环境，所以想通过这篇文章，总结一些经验，同时希望能够对学习SSR的朋友起到一点帮助。
                        我会通过五个步骤，一步步带你完成SSR的配置：
                        纯浏览器渲染，
                        服务端渲染，不包含Ajax初始化数据
                        服务端渲染，包含Ajax初始化数据
                        服务端渲染，使用serverBundle和clientManifest进行优化
                        一个完整的
                        如果你现在对于我上面说的还不太了解，没有关系，跟着我一步步向下走，最终你也可以独立配置一个SSR开发项目，所有源码我会放到github上，大家可以作为参考。                    </div>
                    <div class="comment-box">
                        <a href="javascript:void(0)">评论</a>
                        <a href="javascript:void(0)">点赞</a>
                    </div>
                </div>
                <div class="artical-item">
                    <h3 class="title">javascript事件驱动原理</h3>
                    <p class="publish_date">发布于: 2020-04-08</p>
                    <div class="artical-content">
                        SSR大家肯定都不陌生，通过服务端渲染，可以优化SEO抓取，提升首页加载速度等，我在学习SSR的时候，看过很多文章，有些对我有很大的启发作用，有些就只是照搬官网文档。通过几天的学习，我对SSR有了一些了解，也从头开始完整的配置出了SSR的开发环境，所以想通过这篇文章，总结一些经验，同时希望能够对学习SSR的朋友起到一点帮助。
                        我会通过五个步骤，一步步带你完成SSR的配置：
                        纯浏览器渲染，
                        服务端渲染，不包含Ajax初始化数据
                        服务端渲染，包含Ajax初始化数据
                        服务端渲染，使用serverBundle和clientManifest进行优化
                        一个完整的
                        如果你现在对于我上面说的还不太了解，没有关系，跟着我一步步向下走，最终你也可以独立配置一个SSR开发项目，所有源码我会放到github上，大家可以作为参考。                    </div>
                    <div class="comment-box">
                        <a href="javascript:void(0)">评论</a>
                        <a href="javascript:void(0)">点赞</a>
                    </div>
                </div>
            </div>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        components: {

        },
        data() {
            return {
                isShowBackTop: false
            }
        },
        methods: {
            backClick() {
                this.$refs.scroll.scrollTo(0,0)
            },
            contentScroll(position) {
                // console.log(-position.y);
                this.isShowBackTop = (-position.y) > 400
                // console.log(this.isShowBackTop);
            },
            loadMore() {

            }
        }
    }
</script>

<style scoped>
    .article-content {
        padding: 0.08rem;
    }
    .notify {
        height: 0.6rem;
        background: #fff;
        padding-left: 0.4rem;
        font-size: var(--font-size);
        line-height: 0.6rem;
        color: #737373;
    }

    .horn {
        font-family: iconfont !important;
        font-size: 0.2rem;
        margin-right: 0.1rem;
    }

    .notify-content {
        font-size: 0.16rem;
    }

    .artical-item {
        margin-top: 0.1rem;
        background-color: #fff;
        font-size: 0.12rem;
        position: relative;
    }

    h3.title {
        font-size: 0.2rem;
        color: #464646;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0.2rem 0.2rem 0 0.2rem;
    }

    .publish_date {
        font-size: 0.13rem;
        margin-top: 0.13rem;
        color: #adadad;
        padding: 0rem 0.2rem;
    }

    .artical-content {
        white-space: pre-line;
        font-size: 0.14rem;
        line-height: 0.28rem;
        margin-top: 0.1rem;
        max-height: 2rem;
        color: #464646;
        overflow: hidden;
        padding: 0rem 0.2rem 0.15rem;
    }

    .comment-box {
        height: 0.5rem;
        background: #f9f9f9;
        width: 100%;
        font-size: 0.12rem;
    }

    .comment-box a {
        display: inline-block;
        width: 49%;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.15rem;
        color: #444;
    }
    .content {
        overflow: hidden;
        position: absolute;
        top: 0.8rem;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>

<template>
    <div class="article-content">
        <el-form label-position="right" label-width="80px" :model="article">
            <el-form-item label="标题">
                <el-input v-model="article.title"></el-input>
            </el-form-item>
             <el-form-item label="类型">
                <el-select v-model="article.type" placeholder="请选类型">
                    <el-option label="javascript" :value="1"></el-option>
                    <el-option label="vue" :value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="内容">
                    <mavon-editor 
                        ref="md" 
                        v-model="article.content"
                        style="min-height: 600px"
                    />
            </el-form-item>
             <el-form-item size="large" class="operator-box">
                <el-button type="primary" @click="publish">发布</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import article from "network/article"
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "Article",
        data() {
            return {
                article: {
                    title: '',
                    type: '',
                    content: "",
                    articleId: ""
                }
            }
        },
        mounted() {
            let articleId = this.$route.query.articleId
            if(articleId) {
                article.getArticleDetail({articleId: articleId}).then((res)=> {
                    if(res.data) {
                        this.article.title = res.data.title
                        this.article.type = res.data.type
                        this.article.content = res.data.content
                        this.article.articleId = res.data.articleId
                    }
                });
            }
        },
        methods: {
            publish() {
                if(!this.article.title || !this.article.type || !this.article.content) {
                    alert("数据均为必填项，请填写完整后提交!")
                    return
                }
                if(this.article.articleId){
                    article.updateArticleById(this.article).then((res)=> {
                        if(res.errno === 0) {
                            this.$router.push({path: '/list'})
                        }
                    })
                }else{
                    article.publish(this.article).then((res)=> {
                        if(res.errno === 0) {
                            this.$router.push({path: '/list'})
                        }
                    });
                }

            },
            cancel() {
                 this.$router.push({path: '/list'})
            }
        },
        components: {
            mavonEditor
        }
    }
</script>
<style>
    .article-content .el-input__inner {
        height: 60px;   
        width: 500px;
    }
    .article-content .el-form-item__label {
        width: 120px!important;
    }
    .article-content .el-input {
        width: 50%;
    }
    .article-content .el-input__suffix {
        right: -240px;
    }
    .article-content .el-form-item {
        margin-bottom: 42px;
    }
    .article-content .el-form-item__label {
        margin-right: 40px;
        margin-top: 8px;
    }
    .article-content .operator-box {
        text-align: center;
    }
    .article-content .el-button--primary {
        margin-right: 20px;
    }
    .article-content .el-button--primary, .article-content .el-button--primary+.el-button {
        width: 200px;
        height: 70px;
    }
    .article-content {
        padding-bottom: 50px;
    }
</style>
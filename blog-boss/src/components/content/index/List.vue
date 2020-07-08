<template>
    <div>
        <div style="overflow:hidden">
            <el-input placeholder="请输入关键词"  class="search-input" v-model="key" @keyup.enter.native="search">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" class="search-btn" @click="search">搜索</el-button>
            <el-button type="primary" plain class="create-btn" @click="create">创建</el-button>
        </div>
        <div class="data-content">
            <el-table :data="tableData" border style="width: 100%;">
                <el-table-column
                    prop="title"
                    label="标题"
                    >
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="发布时间"
                    >
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="类型"
                    >
                </el-table-column>
                <el-table-column
                    prop="operator"
                    label="操作"
                    >
                    <template slot-scope="scope">
                        <a href="javascript:void(0)" @click="editArticle(scope.row)">编辑</a>
                        <a href="javascript:void(0)" @click="deleteArticle(scope.row)">删除</a>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import article from "network/article"
export default {
    name: "List",
    data() {
        return {
            key: "",
            tableData: []
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        create() {
            this.$router.push({path: '/article'});
        },
        getData() {
            article.getArticleList({username: sessionStorage.getItem('username'), key: this.key}).then((res)=> {
                 let list = res.data;
                 this.tableData = [];
                 if(list && list.length > 0) {
                     list.forEach((item)=> {
                          let publishDate = new Date(item.createtime);

                          this.tableData.push({
                              title: item.title,
                              date: publishDate.getFullYear() + "-" + (publishDate.getMonth() + 1) + "-" + publishDate.getDate(),
                              type: item.type==1?'javascript':'vue',
                              articleId: item.articleId
                          });
                     });
                 }
             });
        },
        editArticle(item) {
            this.$router.push({path: '/article', query: {articleId: item.articleId}});
        },
        deleteArticle(item) {
            if(!window.confirm("确定要删除此文章吗?")) {
                return;
            }
            article.deleteArticleById({articleId: item.articleId}).then((res) => {
                 if(res.errno === 0) {
                     this.getData();
                     setTimeout(function () {
                         alert("删除成功");
                     },200)
                 }
            });
        },
        search() {
            this.getData()
            this.key=''
        }
    } 
}
</script>
<style>
    .search-input {
        width: 500px;
    }
    .search-input input {
        height: 70px;
    }
    .search-btn {
        height: 65px;
        width: 150px;
        position: relative;
        left: 15px;
        top: -1px;
    }
    .create-btn {
        float:right;
        height: 65px;
        width: 150px;
    }
    .data-content {
        margin-top: 25px;
    }
    .el-table--enable-row-transition .el-table__body td {
        padding: 20px;
    }
    .el-table td, .el-table th.is-leaf {
        padding: 20px;
    }
    .cell a {
        margin-right: 20px;
    }
</style>
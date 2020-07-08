<template>
    <div>
        <div style="overflow:hidden">
            <el-input placeholder="请输入关键词"  class="search-input" v-model="key">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" class="search-btn" @click="search">搜索</el-button>
            <el-button type="primary" plain class="create-btn" @click="create()">创建</el-button>
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
                        <a href="javascript:void(0)" @click="editArtical(scope.row)">编辑</a>
                        <a href="javascript:void(0)" @click="deleteArtical(scope.row)">删除</a>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="page-box">
            <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" @current-change="currentChange">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import artical from "@api/artical"
export default {
    name: "list",
    data() {
        return {
            key: "",
            currentPage: 1,
            pageSize: 20,
            total: 0,
            tableData: []
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        create() {
            this.$router.push({path: '/artical'});
        },
        getData() {
            artical.getArticalList({key: this.key, currentPage: this.currentPage}).then((res)=> {
                let list = res.data.list;
                this.tableData = [];
                this.total = res.data.totalCount || 0;
                if(list && list.length > 0) {
                    list.map((item)=> {
                         let publishDate = new Date(item.publishDate);
                         this.tableData.push({
                             title: item.title,
                             date: publishDate.getFullYear() + "-" + (publishDate.getMonth() + 1) + "-" + publishDate.getDate(),
                             type: item.type,
                             articalId: item.articalId
                         });
                    });
                }
             });
        },
        editArtical(item) {
            this.$router.push({path: '/artical', query: {articalId: item.articalId}});
        },
        deleteArtical(item) {
            if(!window.confirm("确定要删除此文章吗?")) {
                return;
            }
            artical.deleteArticalById({articalId: item.articalId}).then((res) => {
                if(res.message == "success") {
                    this.getData();
                    alert("删除成功");
                }
            });
        },
        search() {
            this.currentPage = 1;
            this.getData();
        },
        currentChange(val) {
            if(this.currentPage == val) return;
            this.currentPage = val;
            this.getData();
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
    .page-box {
        text-align: center;
        margin-top: 50px;
    }
    .el-pager li {
        height: 48px;
        line-height: 48px;
        width: 100px;
    }
    .el-pagination button {
        height :48px;
    }
    .el-pager li.btn-quicknext, .el-pager li.btn-quickprev {
        line-height: 48px;
    }
</style>
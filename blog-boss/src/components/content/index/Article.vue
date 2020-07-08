<template>
    <div id="artical-content">
        <el-form :label-position="labelPosition" label-width="80px" :model="artical">
            <el-form-item label="标题">
                <el-input v-model="artical.title"></el-input>
            </el-form-item>
             <el-form-item label="类型">
                <el-select v-model="artical.type" placeholder="请选类型">
                <el-option label="javascript" value="javascript"></el-option>
                <el-option label="vue" value="vue"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="内容">
                    <mavon-editor 
                        ref="md" 
                        v-model="artical.content"
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
    import artical from "./artical"
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "Artical",
        data() {
            return {
                labelPosition: 'right',
                artical: {
                    title: '',
                    type: '',
                    content: "",
                    articalId: ""
                }
            }
        },
        mounted() {
            let articalId = this.$route.query.articalId;
            if(articalId) {
                artical.getArticalDetail({articalId: articalId}).then((res)=> {
                    if(res && res.data.length > 0) {
                        this.artical.title = res.data[0].title;
                        this.artical.type = res.data[0].type;
                        this.artical.content = res.data[0].content;
                        this.artical.articalId = res.data[0].articalId;
                    }
                });
            }
        },
        methods: {
            publish() {
                if(!this.artical.title || !this.artical.type || !this.artical.content) {
                    alert("数据均为必填项，请填写完整后提交!");
                    return;
                }
                artical.publish(this.artical).then((res)=> {
                    if(res.message == "success") {
                        this.$router.push({path: '/list'});
                    }
                 });
            },
            cancel() {
                 this.$router.push({path: '/list'});
            }
        },
        components: {
            mavonEditor,
        }
    }
</script>
<style>
    #artical-content .el-input__inner {
        height: 60px;   
        width: 500px;
    }
    #artical-content .el-form-item__label {
        width: 120px!important;
    }
    #artical-content .el-input {
        width: 50%;
    }
    #artical-content .el-input__suffix {
        right: -240px;
    }
    #artical-content .el-form-item {
        margin-bottom: 42px;
    }
    #artical-content .el-form-item__label {
        margin-right: 40px;
        margin-top: 8px;
    }
    #artical-content .operator-box {
        text-align: center;
    }
    #artical-content .el-button--primary {
        margin-right: 20px;
    }
    #artical-content .el-button--primary, #artical-content .el-button+.el-button {
        width: 200px;
        height: 70px;
    }
    #artical-content {
        padding-bottom: 50px;
    }
</style>
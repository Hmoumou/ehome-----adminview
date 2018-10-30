<template>
    <div class="swiper"> 
        <el-card>
            <div slot="header">轮播图列表</div>
            <el-table :data="formData">
                <el-table-column label='轮播图'>
                    <div slot-scope="scope">
                        <img :src="scope.row.img" class="imghhhh">
                    </div>
                </el-table-column>
                <el-table-column label='轮播图标题' prop='title' />               
                <el-table-column label='新闻标题' prop='newsId.title'/>
                <el-table-column label='排序' prop='sort'/>
                <el-table-column label='是否显示'>
                <div slot-scope="scope">
                    {{scope.row.states ? '显示':'不显示'}}
                </div>
                </el-table-column>
                <el-table-column label='操作' width='200px'>
                    <div slot-scope="scope">
                        <el-button type='warning' @click='handleEdit(scope.row._id)' size='mini'> 编辑</el-button>
                        <el-button type='danger' @click='handleDelete(scope.row._id)' size='mini'> 删除</el-button>
                    </div>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        name:'swiper',
        data(){
            return{
                formData:[]
            }
        },
        methods:{
            getData(){
                this.$axios.get('/admin/swiper').then(res=>{
                    console.log(res);
                    this.formData = [...res.data.data]
                })
            },
            handleEdit(id){
                this.$router.push({name:'swiperEdit',query:{id}})
            },
            handleDelete(id){
                this.$axios.delete(`/admin/swiper/${id}`).then(res=>{
                    if(res.data.code == 200){
                        this.$message.success(res.data.msg)
                        this.getData()
                    }
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped>
.imghhhh{
    width: 80px;
    height: 80px;
}
</style>
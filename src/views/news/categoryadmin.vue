<template>
    <div>
       <el-table
        :data="formData"
        style="width: 100%">
        <el-table-column
        prop="title"
        label="分类名"
        width="280">
        </el-table-column>
        <el-table-column
        label="分类icon"
        width="200">
        <template slot-scope='scope'>
            <img :src="scope.row.icon" class="fenlei_img" >
        </template>
        </el-table-column>
        <el-table-column
        label="操作">
         <template slot-scope="scope">
            <el-button @click="handleremove(scope.row._id)" type='danger'>删除分类</el-button>
        </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    export default {
        name:'categoryadmin',
        data(){
            return{
                formData:[]
            }
        },
        methods:{
            getData(){
                this.$axios.get('/admin/category').then(res=>{
                    console.log(res);
                   this.formData = [...res.data.data]
                })
            },
                            
            handleremove(id){
                this.$axios.delete(`/admin/category/${id}`,).then(res=>{
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
.fenlei_img{
    width: 80px;
    height: 80px;
}
</style>
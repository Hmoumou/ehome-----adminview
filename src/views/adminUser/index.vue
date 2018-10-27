<template>
    <div class="adminUser">
        <el-card shadow="hover">
            <div slot="header">
            管理员列表
          </div>
            <el-table
            class="box"
                :data="tableData"
                style="width: 100%"
                >
                <el-table-column
                prop="nickname"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="avatar"
                class="avatar"
                label="头像"
                width="110">
                    <template slot-scope='scope'>
                        <img :src="scope.row.avatar" class="table-img">
                    </template>
                </el-table-column>
                <el-table-column
                prop="phone"
                label="手机号"
                 width="180">
                </el-table-column>
                 <el-table-column
                 prop='state'
                :formatter = "stateFormat"
                label="性别"
                 width="90">
                </el-table-column>
                <el-table-column
                prop="desc"
                label="个性签名"
                 width="210">
                </el-table-column>
                <el-table-column label='操作'>
                    <template slot-scope="scope">
                        <el-button type='primary' size='mini' @click="handledetail(scope.row._id)">查看详细</el-button>
                        <el-button type='danger' size='mini' @click="handleremove(scope.row._id)">删除</el-button>      
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-pagination
        background
        :page-size='pagesize'
        layout="prev, pager, next"
        @current-change='handlechange'
        :total="count">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableData:[],
                count:1,
                page:1,
                pagesize:5         
            }
        },
        methods:{
            handlechange(page){
                this.page = page
                // console.log(this.page)
                this.getData()
            },
            stateFormat(sex) {
                    // console.log(sex)
                    if (sex.sex == 0) {
                    return '女'
                    } else if (sex.sex == 1) {
                    return '男'
                    }
                },
           getData(){
            //    console.log(this.page);
               this.$axios.get('/admin/adminuser',{page:this.page}).then(res=>{
                  if(res.data.code == 403){
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    })
                    this.$router.push('/')
                    }else if(res.data.code == 200){
                        // console.log(res)
                     this.tableData = [...res.data.data]
                     this.count = res.data.count
                    }else{
                        this.$message.error(res.msg)
                    }
               })
           },
           handledetail(id){
               this.$router.push({name:'admindetail',query:{id}})
           },
           handleremove(id){
               this.$axios.delete(`/admin/adminuser/${id}`).then(res=>{
                //    console.log(res)
                   if(res.data.code == 200){
                       this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
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

<style scoped lang='scss'>
.adminUser{
     /deep/ .el-card{
        height: calc(100vh - 160px);//可以自己计算
        overflow-y: scroll;
        margin-bottom: 20px;
    }
    .box{
        text-align: center;
    }
    /deep/ .cell{
        text-align: center;
    }
    /deep/ .table-img{
    border-radius: 50%;
    margin-left: 15px;
}
}

</style>
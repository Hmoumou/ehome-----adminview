<template>
    <div class="login">
         
        <div class="box">
           <h2>党建E家后台管理系统</h2>
            <el-form :model='formData' >
               <el-form-item label='用户名'>
                   <el-input v-model="formData.username"></el-input>
               </el-form-item>
                <el-form-item label='密码'>
                   <el-input v-model="formData.password"  @keyup.enter.native='handleLogin' type='password'></el-input>
               </el-form-item>
               <el-button type='primary' @click="handleLogin">登录 </el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name:'login',
        data(){
            return{
                formData:{
                    username:'admin',
                    password:'admin'
                }
            }
        },
        methods:{
            handleLogin(){
                if(this.formData.username&&this.formData.password){
                    this.$axios.post('/admin/adminuser/login',this.formData)
                    .then(res=>{
                       if(res.data.code == 200){
                           this.$message.success(res.data.msg)
                          this.$router.push('/home')
                       }else{
                           console.log(res.data.msg)
                       }
                    })
                }else{
                    this.$message({
                        type:'error',
                        message:'用户名或密码不能为空'
                    })
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
.login{
    overflow: hidden;
    height: 100vh;
    background: #2d3a4b;
    .box{
        box-sizing: border-box;
        margin: 100px auto;
        width: 500px;
        height: 400px;
        border: 1px solid #f1f1f1;
        border-radius: 6px;
        padding: 20px 50px;
        h2{
            text-align: center;
            color:#f1f1f1;
        }
        /deep/ .el-input{
            background: #2d3a4b;
            border:none;
        }
         /deep/ .el-form-item__label{
             color:#fff;
        }
        /deep/ .el-button{
            margin-top: 20px;
            width: 100%;
        }
    }
}

</style>
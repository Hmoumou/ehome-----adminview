<template>
    <div class="add">
        <el-card>
          <div slot="header">
            添加管理员
          </div>
            <el-form :model="formData" label-width='100px' label-position='left'>
                <el-form-item label='用户头像' required>
                  <upload v-model="formData.avatar" > </upload>
                </el-form-item>
                <el-form-item label="姓名" required>
                  <el-input v-model="formData.username"></el-input>
                </el-form-item>
                 <el-form-item v-if='!isEdit' label="密码" required>
                  <el-input v-model="formData.password" type='password'></el-input>
                </el-form-item>
                 <el-form-item label="昵称" required>
                  <el-input v-model="formData.nickname"></el-input>
                </el-form-item>
                 <el-form-item label="性别" >
                   <!-- <el-radio value='0' v-model="formData.sex">女</el-radio>
                   <el-radio value='1' v-model="formData.sex">男</el-radio> -->
                  <el-select v-model="formData.sex">
                    <el-option label='男' value='1'></el-option>
                    <el-option label='女' value='0'></el-option>
                  </el-select>
                </el-form-item>
                 <el-form-item label="工作" >
                  <el-select v-model="formData.job">
                    <el-option label='程序员' value='0'></el-option>
                    <el-option label='富二代' value='1'></el-option>
                    <el-option label='优秀的搬砖者' value='3'></el-option>
                    <el-option label='慈善家' value='4'></el-option>
                    <el-option label='教授' value='5'></el-option>
                  </el-select>
                </el-form-item>
                 <el-form-item label="个性签名">
                  <el-input v-model="formData.desc"></el-input>
                </el-form-item>
                 <el-form-item label="电话" >
                  <el-input v-model="formData.phone"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button v-if="!isEdit"  @click='handlesubmit' type='primary'>提交</el-button>
                  <el-button v-else @click='handlesave' type='primary'>保存修改</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
 import upload from '@/components/upload-avatar' 
export default {
  name: "addadmin",
  data() {
    return {
      detailData:{},
      formData: {
        username:'',
        nickname:'',
        avatar:'',
        desc:'',
        job:'1',
        phone:'',
        sex:'1',
        password:''
      },
      isEdit:false,
      formerData:{}
    };
  },
  methods:{
    handlesubmit(){
       this.$axios.post("/admin/adminuser", this.formData).then(res=>{
        if(res.data.code == 403){
           this.$message({
            message: res.data.msg,
            type: 'warning'
        })
        this.$router.push('/')
        }else if(res.data.code == 200){
          this.$message.success(res.data.msg)
          this.$router.push('/adminUser')
        }
      })
    },
    handlesave(){
      let id = this.$route.query.id
      let EditData = {
        ...this.formerData,
        ...this.formData
      }
      this.$axios.patch(`/admin/adminuser/${id}`,EditData).then(res=>{
        if(res.data.code == 200){
          this.$message.success(res.data.msg)
          this.$router.push({name:'adminUser'})
        }
      })
    },
  getEditData(){
    let id = this.$route.query.id
    this.$axios.get(`/admin/adminuser/${id}`).then(res=>{
      this.formData = res.data.data
      this.formerData = res.data.data
    })
  }
  },
  components:{
      upload,
  },
  created(){
        if(this.$route.name == 'adminEdit'){
          this.isEdit = true
          this.getEditData()
        }else{
          this.isEdit = false
        }
  },
  watch:{
    $route(to, form){
      if(to.name == 'adminEdit'){
        this.isEdit = true
      }else{
        this.isEdit = false
      }
    }
  }
};
</script> 

<style scoped lang='scss' >
.add{
  height: 100vh;
  /deep/ .el-upload{
     width: 80px;
    height: 80px;
    }
  /deep/ .avatar-uploader-icon{
    line-height: 80px;
    width: 80px;
    height: 80px;
  }
}
</style>
<template>
<el-upload
  class="avatar-uploader"
  :show-file-list="false"
  :on-success="handleSuccess"
  :data='formData'
   action="https://upload-z1.qiniup.com"
  >
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
</template>

<script>
    export default {
        props:{
            value:String
        },
        data(){
            return{
                formData:{
                    token:''
                },
                imageUrl:this.value
            }
        },
       methods:{
           handleSuccess(res){
             this.imageUrl = res.url
             this.$emit('input',this.imageUrl)
           },
           getToken(){
               this.$axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
                   if(res.data.code == 200){
                       this.formData.token = res.data.data
                   }
               })
             }      
       },
       watch:{
           value(val){
               this.imageUrl = val
           }
       } ,
       created(){
           this.getToken()
       }    
    }
</script>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>


 
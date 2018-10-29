<template>
    <div> 
        <el-card>
            <div slot="header">分类添加</div>
            <el-form :model='formData' label-width='80px' label-position='right'>
                 <el-form-item label='分类icon'>
                    <uploadimg v-model="formData.icon"></uploadimg>
                </el-form-item>
                <el-form-item label='分类标题'>
                    <el-input v-model="formData.title"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type='primary' @click="handlesave">
                        保存
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import uploadimg from '../../components/upload-avatar'
    export default {
        name:'category',
        data(){
            return{
                formData:{
                    title:'',
                    icon:''
                }
            }
        },
        methods:{
            handlesave(){
                this.$axios.post('/admin/category',this.formData).then(res=>{
                    console.log(res)
                this.$message({
                    type:'success',
                    message:res.data.msg
                   
                })
                 this.formData.title = ''
                    this.formData.icon = ''
                })
            }
        },
        components:{uploadimg}
    }
</script>

<style scoped>

</style>
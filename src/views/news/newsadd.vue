<template>
    <div class="newsadd">
       <el-card>
           <div slot="header">新闻添加</div>
           <el-form :model='newList'  label-width='80px' label-position='right'>
                <el-form-item label='作者' >
                 <el-input :disabled="true" v-model="newList.anthor"></el-input>
              </el-form-item>
               <el-form-item label='新闻标题' >
                   <el-input  v-model="newList.title"></el-input>
               </el-form-item>
             
              <el-form-item label='新闻内容'>
                  <quill-editor v-model="newList.newcontent"></quill-editor>
              </el-form-item>
           </el-form>
       </el-card>
    </div>
</template>

<script>
import quillEditor from '../../components/RiceText.vue'
    export default {
        name:'newsadd',

        components: {quillEditor},
        data(){
            return{
                newList:{
                    title:'',
                    avatar:'',
                    anthor:'',
                    newcontent:{
                        content:'',
                        contentText:''
                    }                               
                },
            }
        },
        methods:{
            getValue(value){
                this.newList.newcontent = value
            }
        },
        created(){
            this.getValue()
            this.newList.anthor = this.$store.state.userInfo.username
        },
        watch:{

        }
        
    }
</script>

<style >
.ql-container {
    min-height: 200px;
}

</style>


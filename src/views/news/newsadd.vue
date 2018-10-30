<template>
    <div class="newsadd">
       <el-card>
           <div slot="header">新闻添加</div>
           <el-form :model='newList'  label-width='80px' label-position='right'>
               <el-form-item label='新闻头图'>
                   <uploadimg v-model='newList.img'></uploadimg>
               </el-form-item>
               <el-form-item label='作者' >
                 <el-input :disabled="true" v-model="newList.author"></el-input>
              </el-form-item>
               <el-form-item label='新闻标题' >
                   <el-input  v-model="newList.title"></el-input>
               </el-form-item>
               <el-form-item label='新闻分类' >
                   <el-select v-model="newList.type">
                       <el-option 
                       :label='item.title'
                       :value='item._id'
                       v-for="(item,index) in categories"
                       :key='index'
                       >
                       </el-option>
                   </el-select>
               </el-form-item>
             
              <el-form-item label='新闻内容'>
                  <quill-editor v-model="newcontent"></quill-editor>
              </el-form-item>
              <el-form-item>
                  <el-button type='primary' @click="handlesubmit">提交</el-button>
              </el-form-item>
           </el-form>
       </el-card>
    </div>
</template>

<script>
import uploadimg from '../../components/upload-avatar.vue'
import quillEditor from '../../components/RiceText.vue'
    export default {
        name:'newsadd',

        components: {quillEditor,uploadimg},
        data(){
            return{
                newList:{
                    title:'',
                    img:'',
                    author:'',
                    content:'',
                    contentText:'',
                    type:''                           
                },
                newcontent:{},
                categories:[]
            }
        },
        methods:{
            // getValue(value){
            //     // this.newcontent = value
            //     console.log('woshivalue',value)
            // },
            getCategory(){
                this.$axios.get('/admin/category').then(res=>{
                    this.categories = [...res.data.data]
                    // console.log(this.newList.type)
                }
                )
            },
            handlesubmit(){
                this.$axios.post('/admin/news',this.newList).then(res=>{
                    if(res.data.code == 200){
                        this.$message.success(res.data.msg)
                        this.$router.push({name:'news'})
                    }
                })
            }
        },
        created(){
            // this.getValue()
            this.getCategory()
            this.newList.author = this.$store.state.userInfo.username
        },
        watch:{
            newcontent(val){
                console.log('1111',val)
                this.newList.content = val.content
                this.newList.contentText = val.contentText 
            }
        }
        
    }
</script>

<style >
.ql-container {
    min-height: 200px;
}

</style>


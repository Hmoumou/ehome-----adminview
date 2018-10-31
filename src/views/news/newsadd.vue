<template>
    <div class="newsadd">
       <el-card>
           <div slot="header">新闻添加</div>
           <el-form :model='newList'  label-width='80px' label-position='right'>
               <el-form-item label='新闻头图'>
                   <uploadimg v-model='newList.img'></uploadimg>
               </el-form-item>
               <el-form-item  v-if='!isEdit' label='作者' >
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
                  <el-button v-if="!isEdit" type='primary' @click="handlesubmit">提交</el-button>
                  <el-button v-else type='primary' @click="handlesave">保存编辑</el-button>
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
                categories:[],
                formerData:{},
                isEdit:false
            }
        },
        methods:{
            getCategory(){
                this.$axios.get('/admin/category').then(res=>{
                    this.categories = [...res.data.data]
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
            },
            handlesave(){
                let id  = this.$route.query.val._id
                let formData = {
                    ...this.formerData,
                    ...this.newList
                }
                console.log('1212121212121212121',formData)
                this.$axios.patch(`/admin/news/${id}`,formData).then(res=>{
                    if(res.data.code == 200){
                        this.$message.success(res.data.msg)
                        this.$router.push({name:'news'})
                    }
                })
            }
        },
        created(){
           if(this.$route.name == 'newsEdit'){
               this.isEdit = true
               this.newList = this.$route.query.val
               this.formerData = this.$route.query.val
               this.newcontent.contentText = this.$route.query.val.contentText
               this.newcontent.content = this.$route.query.val.content
            //    console.log(this.$route.query.val);
           }else{
               this.isEdit = false
           }
            this.getCategory()
            this.newList.author = this.$store.state.userInfo.username
        },
        watch:{
            newcontent(val){
                console.log('1111',val)
                this.newList.content = val.content
                this.newList.contentText = val.contentText 
            },
            $route(to, form){
                if(to.name == 'newsEdit'){
                    this.isEdit = true
                }else{
                    this.isEdit = false
                }
            }
        }
        
    }
</script>

<style >
.ql-container {
    min-height: 200px;
}

</style>


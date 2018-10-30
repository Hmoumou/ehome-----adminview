<template>
    <div>
        <el-card>
            <div slot="header">轮播图添加</div>
            <el-form :model='formData' label-position='left' label-width='100px'>
                <el-form-item label='轮播图' prop='img' required>
                    <upload v-model='formData.img'></upload>
                </el-form-item>
                 <el-form-item label='轮播图标题' prop='title' required>
                    <el-input v-model='formData.title'></el-input>
                </el-form-item>
                <el-form-item label='新闻' prop='newsId' required>
                    <el-select v-model="formData.newsId" >
                        <el-option 
                        v-for="(item, index) in newsList" 
                        :key="index "
                        :value='item._id'
                        :label='item.title'
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label='排序' prop='sort'>
                    <el-input-number 
                    v-model="formData.sort" 
                    :step='1'
                    size="small"
                    :min="1" ></el-input-number>
                </el-form-item>
                <el-form-item label='是否显示'>
                    <el-switch
                    v-model="formData.states"
                    active-text="显示"
                    :active-value='1'
                    :inactive-value='0'
                    inactive-text="不显示">
                    </el-switch>
                </el-form-item>
                <el-form-item >
                    <el-button type='primary' v-if="!isEdit"  @click="handlesave">提交</el-button>
                    <el-button type='primary' v-else  @click="handleEdit">保存修改</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import upload from '../../components/upload-avatar'
    export default {
        name:'swiperadd',
        components:{
            upload
        },
        data(){
            return{
                formerData:{},
                formData:{
                    img:'',
                    title:'',
                    newsId:'',
                    sort:1,
                    states:1
                },
                newsList:[],
                isEdit:false
            }
        },
        methods:{
            getNews(){
                this.$axios.get('/admin/news').then(res=>{
                    this.newsList = [...res.data.data]
                })
            },
            handlesave(){
                this.$axios.post('/admin/swiper',this.formData).then(res=>{
                   if(res.data.code == 200){
                       this.$message({
                           type:'success',
                           message:res.data.msg
                       })
                      this.$router.push({name:'swiper'})
                   }
                })
            },
            handleEdit(){
                let id = this.$route.query.id
                let formData = {...this.formerData,...this.formData}  
                this.$axios.patch(`/admin/swiper/${id}`,formData).then(res=>{
                    if(res.data.code == 200){
                        this.$message.success(res.data.msg)
                        this.$router.push({name:'swiper'})
                    }
                })
            },
            getEditData(){
                let  id  = this.$route.query.id
                this.$axios.get(`/admin/swiper/${id}`).then(res=>{
                    this.formData = res.data.data
                    this.formerData = res.data.data
                })
            }
        },
        watch:{
            $route(to, form){
                if(to.name == 'swiperEdit'){
                    this.isEdit = true
                }else{
                    this.isEdit = false
                    this.formData = {
                            img:'',
                            title:'',
                            newsId:'',
                            sort:1,
                            states:1
                    }
                }
            }
        },
        created(){
            if(this.$route.name == 'swiperEdit'){
                this.isEdit = true
            }else{
                this.isEdit = false
            }
            this.getNews()
            if(this.isEdit){
                this.getEditData()
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="news">
       <el-card>
           <div slot="header">新闻列表</div>
           <el-table :data='tabelData'>
               <el-table-column
               prop='title'
               label='新闻标题'
               width='180px'>                   
               </el-table-column>
              <el-table-column
              label='新闻头图'
              width='120px'
              prop='avatar'
              >
              <template slot-scope="scope">
                  <img :src="scope.row.img" class="tableimg">
              </template>
              </el-table-column>
                <el-table-column
               prop='type.title'
                label='分类'
                width='180px'> 
                </el-table-column>
                <el-table-column
                prop='author'
                label='作者'
                width='120px'
                >
                </el-table-column>
                 <el-table-column
               prop='look_num'
               label='浏览量'
               width='80px'
               >     
               </el-table-column>
                
               <el-table-column
               prop=''
               label='操作'>                 
               </el-table-column>

           </el-table>
       </el-card>
    </div>
</template>

<script>
    export default {
        name:'news',
        data(){
            return{
                tabelData:[],
                limitnum:''

            }
        },
        methods:{
            getData(){
                this.$axios.get('/admin/news').then(res=>{
                    this.tabelData = [...res.data.data]
                    console.log(this.tabelData)
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped>
/* .neirong{
       width:100px;  
		height:30px;
		overflow: hidden; 
		text-overflow:ellipsis;  
} */
.tableimg{
    width: 80px;
    height: 80px;
}
</style>
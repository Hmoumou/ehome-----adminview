<template>
    <div class="news">
       <el-card>
           <div slot="header">新闻列表</div>
           <el-table :data='tabelData'>
               <el-table-column
               prop='title'
               label='新闻标题'
              >                   
               </el-table-column>
              <el-table-column
              label='新闻头图'
             
              prop='avatar'
              >
              <template slot-scope="scope">
                  <img :src="scope.row.img" class="tableimg">
              </template>
              </el-table-column>
                <el-table-column
               prop='type.title'
                label='分类'
               > 
                </el-table-column>
                <el-table-column
                prop='author'
                label='作者'
              
                >
                </el-table-column>
                 <el-table-column
               prop='look_num'
               label='浏览量'
              
               >     
               </el-table-column>
                
               <el-table-column
               width='200px'
               label='操作'>  
               <div slot-scope="scope">
                <el-button type='warning' size='mini' @click="handleEdit(scope.row)">编辑</el-button>               
               <el-button type='danger' size='mini' @click="handleremove(scope.row._id)">删除</el-button>               
               </div>
               
               </el-table-column>

           </el-table>
       </el-card>
    </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      tabelData: [],
      limitnum: ""
    };
  },
  methods: {
    getData() {
      this.$axios.get("/admin/news").then(res => {
        this.tabelData = [...res.data.data];
        console.log(this.tabelData);
      });
    },
    handleEdit(val) {
      this.$router.push({name:'newsEdit',query:{val}})
    },
    handleremove(id) {
        this.$axios.delete(`/admin/news/${id}`).then(res=>{
            if(res.data.code == 200){
                this.$message.success(res.data.msg)
                this.getData()
            }
        })
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
/* .neirong{
       width:100px;  
		height:30px;
		overflow: hidden; 
		text-overflow:ellipsis;  
} */
.tableimg {
  width: 80px;
  height: 80px;
}
</style>
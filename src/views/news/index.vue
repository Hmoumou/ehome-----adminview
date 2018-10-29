<template>
    <div class="news">
       <el-card>
           <div slot="header">新闻列表</div>
           <el-tabel :data='tabelData'>
               <el-tabel-column>
                   
               </el-tabel-column>
           </el-tabel>
       </el-card>
    </div>
</template>

<script>
    export default {
        name:'news',
        data(){
            return{
                tabelData:[]
            }
        }
    }
</script>

<style scoped>

</style>
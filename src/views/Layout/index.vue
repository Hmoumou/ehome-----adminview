<template>
    <div class="main">
        <el-row >
            <el-col :span="4"><SideBar></SideBar></el-col>
            <el-col :span="20" class="right">
                <el-row>
                <Header></Header>
                </el-row>
                <el-row>
                 <AppMain></AppMain>   
                </el-row>
            </el-col>
        </el-row>      
    </div>
</template>

<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import AppMain from './AppMain.vue'
    export default {
        name:'index',
        components:{
            Header,
            SideBar,
            AppMain
        }
    }
</script>

<style scoped>
.right{
    margin-left: 16.6666666%;
    float: left;
    box-sizing: border-box;
}
</style>
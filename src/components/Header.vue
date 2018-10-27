<template>
    <div class="Header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/adminUser'}" >管理员管理</el-breadcrumb-item>
            </el-breadcrumb>
            <el-dropdown>
                <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"> </i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>退出登录</el-dropdown-item>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
    </div>
</template>

<script>
    export default {
        name:'Header'
    }
</script>

<style scoped lang='scss'>
.Header{
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0 20px;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    /deep/ .el-breadcrumb{
        line-height: 60px;
    }
}
</style>
<template>
    <div class="SideBar">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index='/home' class="item">
             <router-link to='/home'>
             首页
             </router-link>
        </el-menu-item>
        <el-submenu index="1">
            <div slot='title'>
                管理员管理
            </div>
            <el-menu-item class="item" index='/layout/adminUser'>
                <router-link to='/adminUser'>
                    管理员列表
                </router-link>
            </el-menu-item>
             <el-menu-item class="item" index='/layout/addadmin'>
                <router-link to='/addadmin'>
                    添加管理员
                </router-link>
            </el-menu-item>
        </el-submenu>
         <el-submenu index="2">
            <div slot='title'>
                新闻管理
            </div>
            <el-menu-item class="item" index='/layout/news'>
                <router-link to='/news'>
                    新闻列表
                </router-link>
            </el-menu-item>
             <el-menu-item class="item" index='/layout/newsadd'>
                <router-link to='/newsadd'>
                    新闻添加
                </router-link>
            </el-menu-item>
        </el-submenu>
        </el-menu>
        
    </div>
</template>

<script>
export default {
  name: "SideBar",
   methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }

};
</script>

<style scoped lang='scss'>
.SideBar{
    position: fixed;
    bottom: 0;
    width: 16.6666666666%;
    left: 0;
    top: 0;
     height: 100vh;
    .el-menu-vertical-demo{
        height: 100%;
        overflow: hidden;
        .item{
            background: #1f2d3d !important;
        }
    }
}
</style>
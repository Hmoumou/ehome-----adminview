import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import('@/views/login')
    },
    {
      path:'/layout',
      component:Layout,
      redirect:'/layout/home',
      children:[
        {
          path:'/home',
          name:'home',
          meta:{
            title:'首页',
          },
          component:()=>import('@/views/home')
        },
        {
          path:'/adminUser',
          name:'adminUser',
          meta:{
            title:'管理员管理',
          },
          component:()=>import('@/views/adminUser')
        },
        {
          path:'/admindetail',
          name:'admindetail',
          meta:{
            title:'管理员详情',
          },
          component:()=>import('@/views/adminUser/addadmin')
        },
        {
          path:'/addadmin',
          name:'addadmin',
          meta:{
            title:'添加管理员',
          },
          component:()=>import('@/views/adminUser/addadmin')
        }
               

      ]
    }
  ]
})

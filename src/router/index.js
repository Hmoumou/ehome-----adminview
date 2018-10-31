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
          path:'/adminEdit',
          name:'adminEdit',
          meta:{
            title:'编辑管理员',
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
        }, {
          path:'/news',
          name:'news',
          meta:{
            title:'新闻管理',
          },
          component:()=>import('@/views/news')
        },
        {
          path:'/newsadd',
          name:'newsadd',
          meta:{
            title:'新闻添加',
          },
          component:()=>import('@/views/news/newsadd')
        },
        {
          path:'/newsEdit',
          name:'newsEdit',
          meta:{
            title:'新闻编辑',
          },
          component:()=>import('@/views/news/newsadd')
        },
        {
          path:'/category',
          name:'category',
          meta:{
            title:'分类添加',
          },
          component:()=>import('@/views/news/category')
        } ,
        {
          path:'/categoryadmin',
          name:'categoryadmin',
          meta:{
            title:'分类添加',
          },
          component:()=>import('@/views/news/categoryadmin')
        } ,
        {
          path:'/swiper',
          name:'swiper',
          meta:{
            title:'轮播图管理',
          },
          component:()=>import('@/views/swiper/index')
        },
        {
          path:'/swiperadd',
          name:'swiperadd',
          meta:{
            title:'轮播图添加',
          },
          component:()=>import('@/views/swiper/swiperAdd')
        },
        {
          path:'/swiperEdit',
          name:'swiperEdit',
          meta:{
            title:'编辑轮播图',
          },
          component:()=>import('@/views/swiper/swiperAdd')
        },


      ]
    }
  ]
})

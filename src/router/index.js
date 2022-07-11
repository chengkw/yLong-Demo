import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '../components/register/register.vue'
import enroll from '../components/register/enroll.vue'

import child_one from '../components/page/footer_child_one.vue'
import child_two from '../components/page/footer_child_two.vue'
import child_three from '../components/page/footer_child_three.vue'
import child_four from '../components/page/footer_child_four.vue'
import child_five from '../components/page/footer_child_five.vue'
import child_six from '../components/page/footer_child_six.vue'

import head_two from '../components/page_head/head_child_two.vue'
import head_three from '../components/page_head/head_child_three.vue'
import head_four from '../components/page_head/head_child_four.vue'
import head_five from '../components/page_head/head_child_five.vue'
import head_six from '../components/page_head/head_child_six.vue'
import head_seven from '../components/page_head/head_child_seven.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      text:'首页',
      children:[
      {path:'child_one',components:child_one,list:'酒店预订',hidden:true,index:0},
      {path:'child_two',component:child_two,list:'机票查询',hidden:true,index:1},
      {path:'child_three',component:child_three,list:'酒店团购',hidden:true,index:2},
      {path:'child_four',component:child_four,list:'热门城市',hidden:true,index:3},
      {path:'child_five',component:child_five,list:'合作伙伴',hidden:true,index:4},
      {path:'child_six',component:child_six,list:'常见酒店',hidden:true,index:5}
      ]
    },
    {
      path: '/head_two',
      name: 'head_two',
      component: head_two,
      text:'国内酒店'
    },
    {
      path: '/head_three',
      name: 'head_three',
      component: head_three,
      text:'国际酒店'
    },
    {
      path: '/head_four',
      name: 'head_four',
      component: head_four,
      text:'机票'
    },
    {
      path: '/head_five',
      name: 'head_five',
      component: head_five,
      text:'火车票'
    },
    {
      path: '/head_six',
      name: 'head_six',
      component: head_six,
      text:'汽车票'
    },
    {
      path: '/head_seven',
      name: 'head_seven',
      component: head_seven,
      text:'旅游指南'
    },
    {
      path:'/register',
      name:'register',
      component:register,
      textrem:'登录|'
    },
    {
      path:'/enroll',
      name:'enroll',
      component:enroll,
      textrem:'注册'
    }
  ]
})

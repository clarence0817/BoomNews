import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import home from '../components/home/home.vue';
import vip from '../components/vip/vip.vue';
import car from '../components/car/car.vue';
import search from '../components/search/search.vue';
import newlist from '../components/newlist/newlist.vue';
import newinfo from '../components/newlist/newinfo.vue';
import pinglun from '../components/pinglun/pinglun.vue';



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', redirect: 'home' },
    { path: '/home', name: 'home', component: home },
    { path: '/vip', name: 'vip', component: vip },
    { path: '/car', name: 'car', component: car },
    { path: '/search', name: 'search', component: search },
    { path: '/home/newlist', name: 'newlist', component: newlist },
    { path: '/home/newinfo/:id', name: 'newinfo', component: newinfo,children:[
      { path: '/pinglun', name: 'pinglun', component: pinglun },
    ] },
   
  ],
  // 点击添加路由属性
  linkActiveClass:'mui-active'
})

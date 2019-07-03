import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import home from '../components/home/home.vue';
import vip from '../components/vip/vip.vue';
import car from '../components/car/car.vue';
import search from '../components/search/search.vue';


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', name: 'home', component: home },
    { path: '/vip', name: 'vip', component: vip },
    { path: '/car', name: 'car', component: car },
    { path: '/search', name: 'search', component: search },
  ]
})

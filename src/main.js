import Vue from 'vue'
import App from './App'
import router from './router'
// 引入mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入mui
import './assets/mui/css/mui.min.css';
import './assets/mui/css/mui-extra.css'

// 引入格式化时间插件
import moment from 'moment';
// 定义全局过滤器
Vue.filter('datefrom',function(datastr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(datastr).format(pattern)
})

// 引入axios
import axios from 'axios';
// 赋值给vue原型
Vue.prototype.$http=axios

Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import App from './App'
import router from './router'
// 引入mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入mui
import './assets/mui/css/mui.min.css';
import './assets/mui/css/mui-extra.css'


Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

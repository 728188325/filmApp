import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icon/iconfont.css'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')

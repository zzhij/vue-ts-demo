import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/styles/index.scss' // global css
import App from '@/App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/index'
import i18n from '@/lang'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

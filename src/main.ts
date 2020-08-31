import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
/* import 'element-ui/lib/theme-chalk/index.css' */
import SvgIcon from 'vue-svgicon'

/* import '@/assets/styles/index.scss' // global css */
import '@/styles/element-variables.scss'
import '@/styles/index.scss'
import '@/icons/components' // 引入svg文件
import App from '@/App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/index'
import i18n from '@/lang'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

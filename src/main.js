// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'
import ElementUI from 'element-ui' // 引入element-ui库
import VForm from 'vform-builds' // 引入VForm库
// import VFormRender from 'vform-builds/dist/VFormRender.umd.min.js'  //引入VFormRender组件
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use' // use lazy load components
// import './permission' // permission control
import './utils/filter' // global filter
import './global.less' // global style
import 'element-ui/lib/theme-chalk/index.css' // 引入element-ui样式
import 'vform-builds/dist/VFormDesigner.css' // 引入VForm样式
// import 'vform-builds/dist/VFormRender.css'  //引入VFormRender样式
Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
Vue.use(ElementUI) // 全局注册element-ui
Vue.use(VForm) // 全局注册VForm(同时注册了v-form-designe、v-form-render等组件)
// Vue.use(VFormRender)  //全局注册VFormRender等组件
// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex, Logo message
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')

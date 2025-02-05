import App from './App'
import uviewPlus from '@/uni_modules/uview-plus'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



 
 
 
// #ifndef VUE3
import Vue from 'vue'
import searchData from './pages/global/searchData.vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
Vue.component('search-data', searchData);
App.mpType = 'app'
 
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
	
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.use(ElementPlus)
  return {
    app
  }
}
// #endif
// 引入配置
import config from '@/config/index'
// 引入拦截器配置
import {requestInterceptors,responseInterceptors} from './interceptors.js'
// 引入luch-request
import { http } from '@/uni_modules/uview-plus'
//  初始化请求配置
const initRequest=(vm)=>{
	http.setConfig((defaultConfig) => {
		/* defaultConfig 为默认全局配置 */
		if(process.env.NODE_ENV === 'development'){
			// #ifdef H5
			defaultConfig.baseURL = '/proxyApi'
				// defaultConfig.baseURL = config.base_url
			// #endif
			// #ifndef H5
			defaultConfig.baseURL = config.base_url
			// #endif
		} else {
			defaultConfig.baseURL = config.base_url
		} 
		return defaultConfig
	})
	requestInterceptors()
	responseInterceptors()
}
export {
	initRequest
}
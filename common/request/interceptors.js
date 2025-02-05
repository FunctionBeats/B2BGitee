import { http, toast} from '@/uni_modules/uview-plus'
import { useLoginStore } from '@/stores/login'
import pinia from '@/stores/store'
const requestInterceptors=(vm)=>{
	/**
	 * 请求拦截
	 * @param {Object} http
	 */
	http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
		config.data = config.data || {}
		config.header['session-Id'] = uni.getStorageSync('takeout-token') || '';
		return config
	}, (config) => // 可使用async await 做异步操作
		Promise.reject(config))
}
const responseInterceptors=(vm)=>{
	/**
	 * 响应拦截
	 * @param {Object} http 
	 */
	http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
		// 业务处理
		if(response.config && response.config.url == '/user/v1/notify/wx-pay' 
		&& response.data =='SUCCESS') {
			return Promise.resolve({
				code:200,
				msg:'支付成功'
			})
		}
		// 未填写收货地址
		if(response.config && response.config.url == '/user/v1/pay/get-order-delivery-info' 
		&& response.data.code ==3000 && response.data.message =='请确认收货地址') {
			return Promise.reject({
				code:1234,
				message:'请确认收货地址'
			})
		}
	    const loginStore = useLoginStore(pinia);
		const data = response.data
		// 自定义参数
		const custom = response.config?.custom
		if (data.code != 200 && data.code != 201 && data.code != 2017) { // 服务端返回的状态码不等于200 和201，则reject()
			if(data.code == 2016){
				loginStore.takeoutLogout()
				return Promise.reject('请重新登录');
			}
			if(response.data.code == 3000){
				toast('服务器错误:'+response.data.message,3000);
			}
			// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
			if (custom.toast !== false) {
				toast(data.msg ||data.message)
				console.log('打印')
			}
			// 如果需要catch返回，则进行reject
			// if (custom?.catch) {
			// 	return Promise.reject(data)
			// } else {
			// 	// 否则返回一个pending中的promise
			// 	return new Promise(() => { })
			// }
			return Promise.reject(data)
		}
		// return data.data || {}
		return Promise.resolve(data)
	}, (response) => { /*  对响应错误做点什么 （statusCode !== 200）*/
	console.log('response',response)
	if(response.statusCode ==500){
		toast(`code:500 异常错误${response.config.url}`,3000)
	} else {
		toast('异常错误:'+JSON.stringify(response),3000)
	}
	
	
	 return Promise.reject(response)
	})
}


export {
	requestInterceptors,
	responseInterceptors
}
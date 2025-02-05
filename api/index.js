import { http } from '@/uni_modules/uview-plus'
let allApis = {} //各个模块的路由配置集合
let modulePaths = import.meta.glob('./module/*.js', { eager: true });//获取当前全部api
for (const key in modulePaths) {
    let def = modulePaths[key]
    Object.keys(def).forEach(item => {
        def[item] && (allApis[item] = def[item])
    })
}

const methodList = ["get","post","upload","download","file"];
let axios = {}
const creatAxios = () => {
	//获取key值数组
	let keys = Object.keys(allApis)
	//遍历allApis一级属性
	keys.forEach(item => {
	    //降属性值付给this
	    axios[item] = {}
	    //一整个模块的全部api信息
	    let childApiObject = allApis[item]
	    //获取二级属性
	    let childApiObjectKeys = Object.keys(childApiObject)
		
	    //遍历二级属性
	    childApiObjectKeys.forEach(key => {
	        axios[item][key] = (params={}, config={}) => {
				let { method,api } = childApiObject[key] || {};
				if (methodList.includes(method)) {
					return	http[method](api, method=='get'? {params,sslVerify:false}:params,{sslVerify:false}) 
				}  else {
					  return Promise.reject(new Error("请求方式有误")) 
				}
	        }
	    })
	})
}
creatAxios()
export default axios
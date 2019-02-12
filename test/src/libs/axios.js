import axios from 'axios'
import qs from 'qs'

const ajaxUrl = 'http://140.143.75.82:81/index.php' ;
// 创建axios实例，防止污染全局
let instance = axios.create({
    baseURL: ajaxUrl,
    withCredentials: true
  })

// 添加请求拦截
instance.interceptors.request.use(req => {
  if (Object.prototype.toString.call(req.data) === '[object FormData]') { // 区分是否是图片上传
  } else {
    if (req.method === 'post') {
      if (!req.headers['Content-type']) {
        req.headers['Content-type'] = 'application/json'
        req.data = qs.parse(req.data)
      }
    }       
  }
  return req 
}, () => {
    const returnData ={
      returnData: {
          status: 'error'
      }
    }
    return Promise.resolve(returnData)
})

// 添加响应拦截
instance.interceptors.response.use((res) => {
  // 登录失效的number=10008返回一个特殊的值
  // 登录失效时跳转至登录页面
  console.log(res.status)
  if (res.status === 500) {
    console.log('res.status',500);
  } else {
    return Promise.resolve(res.data)
  }
}, () => {
  return Promise.resolve('errorstatus')
})
export default instance
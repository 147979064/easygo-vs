import axios from 'axios'
import Vue from 'vue'
import router from 'router/router'
import { Loading, Message } from 'element-ui'

// 实例化
var http = axios.create({
  baseURL: '/vcs',
  timeout: 20000,
  withCredentials:true
  // transformRequest: [data => {
  //   return qs.stringify(data)
  // }]
})

// 挂载到Vue实例上
Vue.prototype.$http = http

var loadinginstace;

// request拦截器
http.interceptors.request.use(config => {
  // 展示等待页面
  loadinginstace = Loading.service({ fullscreen: true });
  // 没有data的时候，后台会报错，默认添加为一个空对象
  if (config.data === '') {
    config.data = '{}'
  }
  return config
}, error => {
  loadinginstace.close()
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})

// response拦截器
http.interceptors.response.use(response => {
  // 响应成功关闭loading
  loadinginstace.close()
  if (response.data.code === -1) {
    router.push('/login')
  } else {
    return response.data
  }
}, error => {
  loadinginstace.close()
  Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

export default http

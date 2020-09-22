// import Vue from 'vue'
import axios from 'axios'
import QS from 'qs'
// const vue = new Vue()
//axios配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:3000/users'

//返回状态的判断（相应拦截）
axios.interceptors.response.use((res) => {
  if (res.data.code != 200) {
    return Promise.reject(res)
  }
  return res.data
},
  (error) => {
    return Promise.reject(error)
  })
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(param)).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    }).catch(error => {
      reject(error)
    })
  })
}
export default {
  //登陆
  Login(params) {
    return fetchGet('/login', params)
  },
  // 注册
  Register(params) {
    return fetchGet('/register', params)
  }
}
// import { rootPath, errHandler } from './config'
// import $ from '@jquery'
//
// const xhr = ({ sysName = '', method = 'get', url, body = null }) => {
//   let request = $.ajax({
//     type: method,
//     dataType: 'json',
//     url: rootPath(sysName) + url,
//     data: body
//     // crossDomain: true, // 跨域
//     // xhrFields: { withCredentials: true } // 跨域允许带上 cookie
//   })
//   .fail(errHandler)
//
//   return request
// }
//
// export default xhr

import axios from 'axios'

const errorHandle = (error) => {
  console.log(error)
}

//
axios.defaults.baseURL = 'http://wwwtest.91csmy.com:7001/api/'
axios.defaults.timeout = 5000
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded'

// get请求
export const xhr = (url, params) => {
  return axios({
    url,
    ...params
  })
    .catch(errorHandle)
}

// post请求
export const xhrPost = (url, params) => {
  return axios({
    url,
    method: 'POST',
    ...params
  })
}

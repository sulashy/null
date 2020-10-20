import instance from './request'

var baseUrl = '/api'

export function loginCheck (fdate) { // post请求方法
  return instance.post(baseUrl + '/admin/check', fdate)
}

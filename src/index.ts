import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/index'
import { xhr } from './core/xhr'
import { formatUrl } from './helper/url'
import { formatData, transformResponse } from './helper/data'
import { formatHeader } from './helper/header'

export default function axios(config: AxiosRequestConfig): AxiosPromise {
  beforeConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function beforeConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeader(config)
  config.data = transformData(config)
}

/* 处理url */
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params = null } = config
  return formatUrl(url, params)
}
/* 处理data */
function transformData(config: AxiosRequestConfig): any {
  const { data } = config
  return formatData(data)
}
/* 处理headers */
function transformHeader(config: AxiosRequestConfig): any {
  const { data, headers = {} } = config
  return formatHeader(data, headers)
}
/* 将响应后的data转换成JSON对象 */
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

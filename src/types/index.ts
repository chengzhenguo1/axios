type MethodConfig =
  | 'get'
  | 'Get'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'put'
  | 'PUT'
  | 'option'
  | 'OPTION'

/* 响应配置 */
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

/* 相应的promise */
export interface AxiosPromise extends Promise<AxiosResponse> {}

/* 请求配置 */
export interface AxiosRequestConfig {
  url: string
  method: MethodConfig
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

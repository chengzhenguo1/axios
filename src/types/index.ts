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

export interface AxiosRequestConfig {
  url: string
  method: MethodConfig
  data?: any
  params?: any
}

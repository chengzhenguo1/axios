import { AxiosRequestConfig } from '../types/index'

export function xhr(config: AxiosRequestConfig): void {
  const { method, url, data = null } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}

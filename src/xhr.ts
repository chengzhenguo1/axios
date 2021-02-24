import { AxiosRequestConfig } from './types/index'

export function xhr(config: AxiosRequestConfig): void {
  const request = new XMLHttpRequest()
  request.open(config.method.toUpperCase(), config.url, true)
  request.send(config.data)
}

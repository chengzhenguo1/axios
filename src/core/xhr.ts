import { AxiosRequestConfig } from '../types/index'

export function xhr(config: AxiosRequestConfig): void {
  const { method, url, data = null, headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    request.setRequestHeader(name, headers[name])
  })

  request.send(data)
}

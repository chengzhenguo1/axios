import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types/index'

export function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { method, url, data = null, headers, responseType } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)

    if (responseType) {
      config.responseType = responseType
    }

    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        return
      }

      const resAllHeaders = request.getAllResponseHeaders()

      const resData =
        responseType && responseType === 'text' ? request.responseText : request.response
      const res: AxiosResponse = {
        data: resData,
        status: request.status,
        statusText: request.statusText,
        headers: resAllHeaders,
        config,
        request
      }

      resolve(res)
    }

    Object.keys(headers).forEach(name => {
      request.setRequestHeader(name, headers[name])
    })

    request.send(data)
  })
}

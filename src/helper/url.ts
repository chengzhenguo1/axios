import { isDate, isObject } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/* 对params参数的数据进行处理 */
export function formatUrl(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []

  // 遍历params对象
  Object.keys(params).forEach(key => {
    const value = params[key]
    if (typeof value === 'undefined' || value === null) {
      return
    }
    // 保存键值对

    let values = []

    if (Array.isArray(value)) {
      values = value
      key += '[]'
    } else {
      values = [value]
    }
    // 遍历保存的键值对，对不同类型进行处理
    values.forEach(val => {
      if (isDate(val)) {
        val = (val as Date).toISOString()
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
    let serializedParams = parts.join('&')

    if (serializedParams) {
      // 去除#值后的数据
      let i = url.indexOf('#')
      if (i !== -1) {
        url = url.slice(0, i)
      }
      // 是否已经有？号
      url += (url.includes('?') ? '&' : '?') + serializedParams
    }
    return url
  })
  return url
}

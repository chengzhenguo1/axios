import { isObject } from './util'

/* 规范headers字段大小写 */
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toLowerCase() === normalizedName.toLowerCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

/* 给headers添加content-type字段 */
export function formatHeader(data: any, headers: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  if (isObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

/* 对返回的headers转换成对象 */
export function parseHeaders(headers: string): any {
  const res = Object.create(null)
  if (!headers) {
    return res
  }
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    res[key] = val
  })
  return res
}

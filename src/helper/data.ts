import { isObject } from './util'

export function formatData(data: any): any {
  if (isObject(data)) {
    data = JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {}
  }
  return data
}

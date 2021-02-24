import { isObject } from './util'

export function formatData(data: any): any {
  if (isObject(data)) {
    data = JSON.stringify(data)
  }
  return data
}

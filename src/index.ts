import { AxiosRequestConfig } from './types/index'
import { xhr } from './core/xhr'
import { formatUrl } from './helper/url'

export default function axios(config: AxiosRequestConfig): void {
  beforeConfig(config)
  xhr(config)
}

function beforeConfig(config: AxiosRequestConfig): void {
  config.url = tansformUrl(config)
}

function tansformUrl(config: AxiosRequestConfig): string {
  const { url, params = null } = config
  return formatUrl(url, params)
}

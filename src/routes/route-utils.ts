import { matchPath } from 'react-router'
import { routeArray, routeMap } from './routes'

const matches = (url: string, path: string) => {
  return matchPath(url, path) != null
}

export const hasMatch = (url: string): boolean => {
  return routeMap.has(url) && routeArray.some((route) => matches(url, route.path))
}

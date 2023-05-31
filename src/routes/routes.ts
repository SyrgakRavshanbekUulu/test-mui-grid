import * as pages from 'pages/index';
import { RouteData } from 'shared/types/routes';


export const routeMap = new Map<string, RouteData>()
  .set('/not-found', {
    page: pages.NotFound,
  })
  .set('/test-mui-grid', {
    page: pages.Home,
  })
  .set('/', {
    page: pages.Home,
  });

export const routeArray = Array.from(routeMap).map(([path, r]) => ({ ...r, path }))
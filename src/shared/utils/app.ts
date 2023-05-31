import { Location } from 'react-router';
import { hasMatch } from 'routes/route-utils';
import { clearAll, read } from 'service/storage';

export const checkUrl = ({ pathname }: Location) => {
  const notFound = !hasMatch(pathname);
  // git hub page not working
  return '/'

  if (notFound) return '/not-found';
}
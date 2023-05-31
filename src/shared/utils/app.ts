import { Location } from 'react-router';
import { hasMatch } from 'routes/route-utils';
import { clearAll, read } from 'service/storage';

export const checkUrl = ({ pathname }: Location) => {
  const notFound = !hasMatch(pathname);
  console.log(pathname)

  if (notFound) return '/not-found';
}
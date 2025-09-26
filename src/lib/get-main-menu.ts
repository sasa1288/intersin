import { query } from './strapi';

export function getMainMenuInfo() {
  return query('main-menu?populate=*').then(res => res.data);
}

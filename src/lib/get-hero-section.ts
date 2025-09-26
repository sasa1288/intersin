import { query } from './strapi';

export function getHeroInfo() {
  return query('hero?populate[hero][populate]=heroImg').then(res => res.data);
}

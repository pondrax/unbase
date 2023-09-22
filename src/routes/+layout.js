
import { loadTranslations } from '$lib/lang';

export const prerender = true
export const trailingSlash = 'always'

const pages = Object.keys(import.meta.glob('./**/+page.svelte'))
  .map(key => key.replace(/\.|\+page\.svelte/g, ''))

export async function load({ url }) {
  const { pathname } = url;

  const initLocale = 'en'; // get from cookie, user session, ...

  await loadTranslations(initLocale, pathname); // keep this just before the `return`

  return {
    pages
  }
}

const pages = Object.keys(import.meta.glob('../**/+page.svelte'))
  .map(key => key.replace(/\.|\+page\.svelte/g, ''))

export async function load() {
  return {
    pages
  }
}
import i18n from 'sveltekit-i18n';


function loaders() {
  const path = 'lang'
  return Object.entries(import.meta.glob('../lang/**/*.json')).map(([keyPath, loader]) => {
    const pattern = new RegExp(`/${path}/([^/]+)(?:/([^/.]+))?\\.json$`)
    const [, locale, key] = keyPath.match(pattern) || []
    return {
      locale,
      key: key || '',
      loader
    }
  });
}

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  // @ts-ignore
  loaders: loaders()
  // loaders: [
  //   {
  //     locale: 'en',
  //     key: '',
  //     loader: async () => (
  //       await import('../lang/en.json')
  //     ).default,
  //   },
  // ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
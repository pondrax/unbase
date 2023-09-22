import { PUBLIC_POCKETBASE_URL } from '$env/static/public'
import PocketBase from 'pocketbase'

export const db = new PocketBase(PUBLIC_POCKETBASE_URL)

export const auth = {
  /**
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    let authResponse;
    try {
      authResponse = await db.collection('users').authWithPassword(email, password, {
        expand: 'role'
      });
    } catch (e) {
      console.log(authResponse)
    }
    return authResponse
  },
  /**
   * @param {string} name
   */
  async provider(name) {
    const authResponse = await db.collection('users').authWithOAuth2({
      provider: name,
      expand: 'role',
      createData: {},
      urlCallback: (url) => {
        window.open(url + '&prompt=consent', '_blank');
        // console.log(url)
      }
    });

    return authResponse;
  },

  async listProviders() {
    return (await db.collection('users').listAuthMethods()).authProviders
  }
}
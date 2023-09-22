import { browser } from '$app/environment';
// import { page } from '$app/stores';
import { writable } from 'svelte/store';

/** @type {import('pocketbase').AuthModel} */
let defaultUser = null;
if (browser && localStorage.user) {
	defaultUser = JSON.parse(localStorage.user);
}

export const user = writable(defaultUser);
export const profile = writable(defaultUser?.expand?.moms?.at(0));
export const loading = writable(true);
export const toast = writable([]);

user.subscribe((val) => {
	// console.log(val)
	if (browser && !val) {
		localStorage.removeItem('user');
		profile.set(null);
	}
});
toast.subscribe(() => {
	setTimeout(() => loading.set(false), 500);
});

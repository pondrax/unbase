import { goto } from '$app/navigation';

/** @type {import('@sveltejs/kit').HandleClientError} */
export async function handleError() {
	try {

		// console.log(error, event)
		// const errorId = crypto.randomUUID();

		goto('/404');
	} catch (e) {
		//
	}
}
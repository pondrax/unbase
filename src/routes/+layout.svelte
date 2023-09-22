<script>
	import 'uno.css';
	import 'floeui/floe.css';
	import { fnTheme } from 'floeui/dist/directives';
	import { loading, toast } from '$lib/store';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { db } from '$lib/db';
    import { PUBLIC_APP_NAME } from '$env/static/public';

	beforeNavigate(async ({ from, to }) => {
		if (!db.authStore.isValid) {
			setLoading();
		}
		// }
	});
	afterNavigate(async (event) => {
		setLoading(false);
	});

	function setLoading(state = true) {
		$loading = state;
	}

	/**
	 * @param {number} i
	 */
	function removeToast(i) {
		$toast.splice(i, 1);
		$toast = $toast;
	}
	$: if ($toast) {
		$toast.forEach((alert, i) => {
			if (!alert.error) {
				setTimeout(() => ($toast = []), 3000);
				// setTimeout(() => removeToast(i), 3000);
			}
		});
	}
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>

<div bg-base>
	<slot />
	<div fixed z-50 top-5 right-5 use:fnTheme={{ theme: 'cupcake', pos: 'end' }}></div>
</div>

{#if $toast.length > 0}
	<div flex flex-col gap-3 fixed bottom-5 right-2 p-2 z-99 max-h-screen overflow-y-auto>
		{#each $toast as alert, i}
			<div alert flex-nowrap border relative>
				<button btn="~ xs" absolute top--1 right-1 on:click={() => removeToast(i)}>
					&times;
				</button>
				{#if alert?.error}
					<i i-bx-x-circle text-error text-xl flex-shrink-0 />
					<div w-50 overflow-auto>
						{JSON.stringify(alert.error)}
					</div>
				{:else}
					<i i-bx-info-circle text-info text-xl flex-shrink-0 />
					<div w-50 overflow-auto>{alert.action}</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}

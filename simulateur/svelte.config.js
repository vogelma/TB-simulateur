import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		adapter: adapter(),
		csrf: {
		  checkOrigin: false,
		}
	  },
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sveltePreprocess()

};

export default config;

import adapter from '@sveltejs/adapter-static';

import preprocess from "svelte-preprocess";

export default {

	preprocess: preprocess({
		typescript: true, 
		scss: true 
	}),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},

};
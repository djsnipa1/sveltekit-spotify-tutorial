import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/spotify/browse/new-releases');
	const res2 = await fetch('/api/spotify/browse/featured-playlists');

	console.log(await res.json());
	console.log(await res2.json());
};

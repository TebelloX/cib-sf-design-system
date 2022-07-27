import { toId } from '@storybook/csf';

import { URL } from 'url';

// eslint-disable-next-line import/prefer-default-export
export const constructUrl = (storybookUrl, kind, story) => {
	const id = toId(kind, story);

	const storyUrl = `/iframe.html?id=${id}`;
	const { protocol, host, pathname, search } = new URL(storybookUrl);
	const pname = pathname.replace(/\/$/, ''); // removes trailing /
	const query = search.replace('?', '&'); // convert leading ? to &
	return `${protocol}//${host}${pname}${storyUrl}${query}`;
};

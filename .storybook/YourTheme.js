// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
	base: 'light',
	brandTitle: 'My custom storybook',
	brandUrl: 'https://content.designsystem.standardbank.co.za/',
	brandImage: 'onesource.svg',
	colorPrimary: '#0033AA',
	colorSecondary: '#707070',

	// .storybook/YourTheme.js

	colorPrimary: 'darkblue',
	colorSecondary: 'darkblue',

	// UI
	appBg: '#DFEEFD',
	appContentBg: 'white',
	appBorderColor: 'grey',
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: 'black',
	textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	barTextColor: 'white',
	barSelectedColor: 'white',
	barBg: 'darkblue',

	// Form colors
	inputBg: 'white',
	inputBorder: 'white',
	inputTextColor: 'black',
	inputBorderRadius: 8,
});

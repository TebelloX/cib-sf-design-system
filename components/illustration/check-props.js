/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
/* eslint-disable import/no-mutable-exports */

import componentIsDeprecated from '../../utilities/warning/component-is-deprecated';

let checkProps = function checkPropsFunction() {};

if (process.env.NODE_ENV !== 'production') {
	checkProps = function checkPropsFunction(COMPONENT, props) {
		componentIsDeprecated(
			COMPONENT,
			props,
			'This was decided due to issues with shadow DOM preventing imported SVG files from detecting SLDS styles. Please visit https://www.lightningdesignsystem.com/components/illustration/ to copy the provided example code for use in your application.'
		);
	};
}

export default checkProps;

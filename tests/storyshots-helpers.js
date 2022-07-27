/*
 * STORY-BASED SNAPSHOT HELPER FUNCTIONS
 *
 * For more information, please visit:
 * https://github.com/storybooks/storybook/tree/master/addons/storyshots
 */

const getExcludeKindRegex = ({ arrayOfStoryKind = [] } = {}) => {
	const storyKindString = arrayOfStoryKind.join('|');
	return new RegExp(`^(?!(${storyKindString})$)[a-z A-Z0-9s]+$`, 'g');
};

// Use with `./exclude-story-config` to create a REGEX config that adds stories instead of removing them
const getIncludeKindRegex = ({ arrayOfStoryKind = [] } = {}) => {
	const storyKindString = arrayOfStoryKind.join('|');
	return new RegExp(`^(${storyKindString})$`, 'g');
};

// If a Storybook story should not be tested by Storyshots, please add
// the suffix `NoTest` to the story's name.
const skipStoryShotTest = 'NoTest';

// eslint-disable-next-line import/prefer-default-export
export { getExcludeKindRegex, getIncludeKindRegex, skipStoryShotTest };

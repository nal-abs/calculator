/* eslint-disable no-console */
const hundred = 100;
const AdditionalKeys = {
	clear: (context) => context.seed.result,

	percentage: (context) => context.state.result / hundred,
};

export default AdditionalKeys;

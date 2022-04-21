/* eslint-disable no-console */

const hundred = 100;
const ActionKeys = {

	clear: (context) => context.seed.result,

	percentage: (context) => context.state.result / hundred,

	// BackSpace: (context) => Math.floor(context.state.result / ten),

	// decimalValue: (context) => `${ context.state.result }.${ (context.state.number * ten) + context.state.number }`,

};

export default ActionKeys;

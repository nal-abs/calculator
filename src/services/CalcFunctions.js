/* eslint-disable no-console */

const ten = 10;
const CalcFunctions = {
	number: (context) => {
		const { state, data } = context;

		return (state.number * ten) + data;
	},
	key: (context) => context.data,

	add: (context) => (context.state.result - context.state.number)
	+ CalcFunctions.number(context),

	subtract: (context) => (context.state.result
	+ context.state.number) - CalcFunctions.number(context),

	multiply: (context) => context.state.result * CalcFunctions.number(context),

	// division: (context) => context.state.result / context.data,

	MathFunction: (context) => {
		const compute = CalcFunctions[context.state.operator];

		return context.state.operator !== ''
			? compute(context)
			: CalcFunctions.number(context);
	},
	operation: (context) => CalcFunctions.MathFunction(context),
};

export default CalcFunctions;

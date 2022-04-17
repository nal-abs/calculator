/* eslint-disable no-console */
const CalcFunctions = {
	number: (context) => {
		const { state, data } = context;
		const ten = 10;

		return (state.number * ten) + data;
	},
	key: (context) => context.data,
	MathFunction: (context) => {
		const { data, state } = context;

		return state.result + data;
	},
	operation: (context) => {
		const { state } = context;

		return state.operator === ''
			? CalcFunctions.number(context)
			: CalcFunctions.MathFunction(context);
	},
};

export default CalcFunctions;

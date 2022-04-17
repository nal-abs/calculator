/* eslint-disable no-console */

const ten = 10;
const CalcFunctions = {
	number: (context) => {
		const { state, data } = context;

		return (state.number * ten) + data;
	},
	key: (context) => context.data,
	MathFunction: (context) => {
		const { state } = context;

		return state.result + state.number ;
	},
	operation: (context) => {
		const { state } = context;

		return state.operator === ''
			? CalcFunctions.MathFunction(context)
			: state.result;
	},
};

export default CalcFunctions;

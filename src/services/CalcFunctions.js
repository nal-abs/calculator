import operators from './operators.js';

const ten = 10;
const CalcFunctions = {
	getNumber: (context) => {
		const { state, data } = context;

		return (state.number * ten) + data;
	},
	getOperator: (context) => context.data,

	calculation: (context) => {
		const { state } = context;

		return state.operator !== ''
			? operators[state.operator]({ ...context,
				data: CalcFunctions.getNumber(context) })
			: CalcFunctions.getNumber(context);
	},
};

export default CalcFunctions;

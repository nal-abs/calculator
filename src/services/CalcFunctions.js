/* eslint-disable no-console */

import MathFunction from './MathFunction';

const ten = 10;
const CalcFunctions = {
	getNumber: (context) => {
		const { state, data } = context;

		return (state.number * ten) + data;
	},
	getOperator: (context) => context.data,

	calculation: (context) => {
		const compute = MathFunction[context.state.operator];

		return context.state.operator !== ''
			? compute(context)
			: CalcFunctions.getNumber(context);
	},

};

export default CalcFunctions;

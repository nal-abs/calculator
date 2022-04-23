import operators from './operators.js';

const ten = 10;
const hundred = 100;

const number = {
	'%': (context) => context.state.number / hundred,
	'00': (context) => context.state.number * hundred,
};

const CalcFunctions = {

	getNumber: (context) => {
		const { data } = context;

		return number[data]
			? number[data](context)
			: (context.state.number * ten) + context.data;
	},

	calculation: (context) => {
		const { state: { operator }} = context;

		return operators[operator]
			? operators[operator]({ ...context,
				data: CalcFunctions.getNumber(context) })
			: CalcFunctions.getNumber(context);
	},

	updateResult: (context) => {
		const { state: { result }, data } = context;

		return data === 'clear' ? 0 : result;
	},
};

export default CalcFunctions;

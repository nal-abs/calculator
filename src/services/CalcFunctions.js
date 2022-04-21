import ActionKeys from './ActionKeys.js';
import operators from './operators.js';

const ten = 10;
const hundred = 100;
const CalcFunctions = {
	number: {
		'%': (context) => context.state.number / hundred,
		'00': (context) => context.state.number * hundred,
	},

	default: (context) => (context.state.number * ten) + context.data,

	getNumber: (context) =>
		(CalcFunctions.number[context.data]
			? CalcFunctions.number[context.data](context)
			: CalcFunctions.default(context)),
	getOperator: (context) => context.data,

	calculation: (context) =>
		(operators[context.state.operator]
			? operators[context.state.operator]({ ...context,
				data: CalcFunctions.getNumber(context) })
			: CalcFunctions.getNumber(context)),

	CheckOperator: (context) =>
		(ActionKeys[context.data]
			? ActionKeys[context.data](context)
			: context.state.result),

	getKeys: (context) => CalcFunctions.CheckOperator(context),

};

export default CalcFunctions;

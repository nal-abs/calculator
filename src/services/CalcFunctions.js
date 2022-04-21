import ActionKeys from './ActionKeys.js';
import operators from './operators.js';

const ten = 10;
const CalcFunctions = {
	getNumber: (context) => {
		const { state, data } = context;

		return (state.number * ten) + data;
	},
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

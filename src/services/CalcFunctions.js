import AdditionalKeys from './AdditionalKeys.js';
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
	CheckOperator: (context) =>
		(AdditionalKeys[context.data]
			? AdditionalKeys[context.data](context)
			: context.state.result),

	getKeys: (context) => CalcFunctions.CheckOperator(context),

};

export default CalcFunctions;

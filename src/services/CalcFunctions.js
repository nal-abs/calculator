import operators from './operators.js';

const ten = 10;
const hundred = 100;

const addDigit = (context) => (context.state.number * ten)
+ context.data.value;

const specialNumbers = {
	'%': (context) => context.state.number / hundred,
	'00': (context) => context.state.number * hundred,
};

const CalcFunctions = {
	getNumber: (context) =>
		(specialNumbers[context.data.value] || addDigit)(context),

	calculation: (context) => {
		const { state: { operator }} = context;

		return operators[operator]
			? operators[operator](context)
			: CalcFunctions.getNumber(context);
	},

};

export default CalcFunctions;

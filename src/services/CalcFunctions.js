/* eslint-disable no-console */
const CalcFunctions = {
	number: (context) => {
		const { state, data } = context;
		const ten = 10;

		return (state.number * ten) + data;
	},

	MathFunction: (context) => {
		const { state } = context;

		switch (state.operator) {
		case 'add':
			return state.result + state.number;
		case 'subtract':
			return state.result - state.number;
		}
	},

	key: (context) => {
		const { data, state: { number }} = context;

		console.log(CalcFunctions.MathFunction(context));

		return data === 'compute'
			? CalcFunctions.MathFunction(context)
			: number;
	},

};

export default CalcFunctions;

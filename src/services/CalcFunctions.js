/* eslint-disable no-console */
const CalcFunctions = {
	number: (context) => {
		const { state, data } = context;
		const ten = 10;

		return (state.number * ten) + data;
	},

	MathFunction: (context) => {
		const { data, state } = context;

		switch (data) {
		case 'add':
			return state.result + state.number;
		case 'subtract':
			return state.result - state.number;
		case 'multiply':
			return state.result * state.number;
		}
	},

	key: (context) => {
		const { data } = context;

		console.log(CalcFunctions.MathFunction(context));

		return data === 'compute'
			? context.state.result
			: CalcFunctions.MathFunction(context);
	},

};

export default CalcFunctions;

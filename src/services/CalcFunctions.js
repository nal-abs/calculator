/* eslint-disable no-console */
const CalcFunctions = {
	number: (context) => {
		const { state, data } = context;
		const ten = 10;

		return (state.number * ten) + data;
	},
	key: (context) => context.data,

};

export default CalcFunctions;

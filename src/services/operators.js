// const ten = 10;
const operators = {

	add: (context) => {
		const { state: { result, number }, data } = context;

		return result - number + data ;
	},
	subtract: (context) => {
		const { state: { result, number }, data } = context;

		return result + number - data ;
	},

	multiply: (context) => {
		const { state: { result }, data } = context;

		return result * data;
	},

	divide: (context) => {
		const { state: { result }, data } = context;

		return result / data;
	},

	compute: (context) => context.state.result,
};

export default operators;

// const ten = 10;
const operators = {

	add: (context) => {
		const { state: { result, number }} = context;

		return result + number ;
	},
	subtract: (context) => {
		const { state: { result, number }} = context;

		return result - number;
	},

	multiply: (context) => {
		const { state: { result, number }} = context;

		return result * number;
	},

	divide: (context) => {
		const { state: { result, number }} = context;

		return result / number;
	},

	compute: (context) => context.state.result,

};

export default operators;

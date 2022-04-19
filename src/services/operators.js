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

	division: (context) => {
		const { state: { result }, data } = context;

		return result / data;
	},

};

export default operators;

const nine = 9;
const ten = 10;
const operators = {

	add: (context) => {
		const { state: { result, number }, data } = context;

		return result + (nine * number) + data ;
	},
	subtract: (context) => {
		const { state: { result, number }, data } = context;

		return result - (nine * number) - data ;
	},

	multiply: (context) => {
		const { state: { result, number }, data } = context;

		return result * ((ten * number) + data);
	},

	division: (context) => {
		const { state: { result, number }, data } = context;

		return result / ((ten * number) + data);
	},

};

export default operators;

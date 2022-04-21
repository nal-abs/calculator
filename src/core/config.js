/* eslint-disable no-magic-numbers */
const config = {
	numberStart: 0,
	numbers: [
		{ label: 0, value: 0 },
		{ label: 1, value: 1 },
		{ label: 2, value: 2 },
		{ label: 3, value: 3 },
		{ label: 4, value: 4 },
		{ label: 5, value: 5 },
		{ label: 6, value: 6 },
		{ label: 7, value: 7 },
		{ label: 8, value: 8 },
		{ label: 9, value: 9 },
		{ label: '%', value: '%' },
		{ label: '00', value: '00' },
	],
	operators: [
		{ label: '+', operation: 'add' },
		{ label: '-', operation: 'subtract' },
		{ label: '*', operation: 'multiply' },
		{ label: '/', operation: 'division' },
		{ label: '=', operation: 'compute' },
		{ label: '.', operation: 'decimalValue' },
		{ label: 'Ac', operation: 'clear' },
		{ label: 'X', operation: 'BackSpace' },
	],
	button: {
		width: 8,
		height: 8,
		noOfElementsInRow: 4,
	},
};

export default config;

/* eslint-disable no-magic-numbers */
const config = {
	numberStart: 0,
	numbers: [
		{ label: 0, value: 0, position: '0vmin 0vmin' },
		{ label: 1, value: 1, position: '-8vmin 0vmin' },
		{ label: 2, value: 2, position: '-16vmin 0vmin' },
		{ label: 3, value: 3, position: '-24vmin 0vmin' },
		{ label: 4, value: 4, position: '0vmin -8vmin' },
		{ label: 5, value: 5, position: '-8vmin -8vmin' },
		{ label: 6, value: 6, position: '-16vmin -8vmin' },
		{ label: 7, value: 7, position: '-24vmin -8vmin' },
		{ label: 8, value: 8, position: '0vmin -16vmin' },
		{ label: 9, value: 9, position: '-8vmin -16vmin' },
		{ label: '%', value: '%' },
		{ label: '00', value: '00' },

	],
	operators: [
		{ label: '+', operation: 'add' },
		{ label: '-', operation: 'subtract' },
		{ label: '*', operation: 'multiply' },
		{ label: '/', operation: 'divide' },
		{ label: '=', operation: 'compute' },
		{ label: '.', operation: 'decimalValue' },
		{ label: 'C', operation: 'clear' },
		{ label: 'X', operation: 'BackSpace' },
	],
	button: {
		width: 8,
		height: 8,
		noOfElementsInRow: 4,
	},
};

export default config;

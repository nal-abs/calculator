const config = {
	numberStart: 0,
	button: {
		width: 8,
		height: 8,
	},
	noOfElementsInRow: 4,
	buttons: [
		{
			categories: [
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
				{
					label: '00', value: '00', position: '-16vmin -16vmin',
					width: '16vmin', size: '200%',
				},
				{ label: '%', value: '%', position: '-16vmin -32vmin' },
			],
			action: 'setNumber',
		},
		{
			categories: [
				{
					label: '+',
					operation: 'add',
					position: '0vmin -24vmin',
				},
				{
					label: '-',
					operation: 'subtract',
					position: '-8vmin -24vmin',
				},
				{
					label: '/',
					operation: 'divide',
					position: '-16vmin -24vmin',
				},
				{
					label: '*',
					operation: 'multiply',
					position: '-24vmin -24vmin',
				},
				{
					label: '=',
					operation: 'compute',
					position: '0vmin -32vmin',
				},
				{
					label: '.',
					operation: 'decimalValue',
					position: '-8vmin -32vmin',
				},
				{ label: 'C', operation: 'clear', position: '-24vmin -32vmin' },
			],
			action: 'setOperator',
		},
	],
};

export default config;

/* eslint-disable no-console */
import { React } from 'react';
import CalculatorKeys from './calculatorKey';
import calculatorValue from './calculatorValue';

const ButtonRows = (context) => {
	const { config } = context;

	return (
		<div>
			{ config.numbers.map((rows, i) =>
				calculatorValue({ ...context, data: rows }, i)) }
			{ config.operators.map((rows, i) =>
				CalculatorKeys({ ...context, data: rows }, i)) }
		</div>
	);
};

export default ButtonRows;

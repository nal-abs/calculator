/* eslint-disable no-console */
import CalculatorKeys from './calculatorKey.js';
import { React } from 'react';
import CalculatorValue from './calculatorValue.js';

const ButtonRow = (context, i) => {
	const { data: rows } = context;

	console.log(i);

	return (
		<div key={ i }>
			{ rows.label.keys.map((key) =>
				CalculatorKeys({ ...context, data: key })) }
			{ rows.label.values.map((value) =>
				CalculatorValue({ ...context, data: value })) }
		</div>);
};

const ButtonRows = (context) => {
	const { config } = context;

	return (
		<div>
			{ config.calculatorKeys.map((rows, i) =>
				ButtonRow({ ...context, data: rows }, i)) }</div>
	);
};

export default ButtonRows;

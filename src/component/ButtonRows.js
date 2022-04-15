/* eslint-disable react/destructuring-assignment */
import SingleButton from './keysButton.js';
import { React } from 'react';

const RowButton = (context, i) => {
	const { data: rows } = context;

	return (
		<div key={ i }>
			{ rows.map((key) =>
				SingleButton({ ...context, data: key })) }</div>);
};

const RowsButton = (context) => {
	const { config } = context;

	return (
		<div>
			{ config.calculatorKeys.map((rows) =>
				RowButton({ ...context, data: rows })) }</div>
	);
};

export default RowsButton;

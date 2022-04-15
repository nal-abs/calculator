import { React } from 'react';

const CalculatorKeys = (context) => {
	const { data: rows } = context;

	return (
		<button
			key={ rows.label }
		>{ rows.label }</button>
	);
};

export default CalculatorKeys;

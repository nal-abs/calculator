import { React } from 'react';

const CalculatorKeys = (context) => {
	const { data: Key } = context;

	return (
		<button
			key={ Key }
		>{ Key }</button>
	);
};

export default CalculatorKeys;

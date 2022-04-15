import { React } from 'react';

const CalculatorValue = (context) => {
	const { data: rows } = context;

	return (
		<button
			key={ rows.value }
			onClick={ () => context.actions.display(rows.value) }
		>{ rows.value }</button>
	);
};

export default CalculatorValue;

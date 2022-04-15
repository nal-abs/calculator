import { React } from 'react';

const CalculatorValue = (context) => {
	const { data: value } = context;

	return (
		<button
			key={ value }
			onClick={ () => context.actions.display(value) }
		>{ value }</button>
	);
};

export default CalculatorValue;

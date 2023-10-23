import { React } from 'react';

const Operators = (context) => {
	const { data: operator, actions } = context;

	return (
		<button
			key={ operator.label }
			className="sprite buttonSize"
			style={ { backgroundPosition: operator.position } }
			onClick={ () => {
				actions.setOperator(operator.operation);
			} }
		/>
	);
};

export default Operators;

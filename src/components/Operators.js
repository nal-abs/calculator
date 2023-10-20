import { React } from 'react';

const Operators = (context) => {
	const { data: operator, config, actions } = context;
	const style = {
		width: `${ config.button.width }vMin`,
		height: `${ config.button.width }vMin`,
	};

	return (
		<button
			key={ operator.label }
			style={ style }
			onClick={ () => {
				actions.setOperator(operator.operation);
			} }
		>{ operator.label }</button>
	);
};

export default Operators;

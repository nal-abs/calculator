import { React } from 'react';

const ButtonOperator = (context) => {
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
				actions.updateKeys(operator.operation);
				actions.updateResult(operator.operation);
			} }
		>{ operator.label }</button>
	);
};

export default ButtonOperator;

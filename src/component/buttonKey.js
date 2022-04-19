import { React } from 'react';

const ButtonKey = (context) => {
	const { data: rows, config, actions } = context;
	const style = {
		width: `${ config.button.width }vMin`,
		height: `${ config.button.width }vMin`,
	};

	return (
		<button
			key={ rows.label }
			style={ style }
			onClick={ () => {
				actions.updateKeys(rows.operation);
				actions.updateResult(rows.operation);
			} }
		>{ rows.label }</button>
	);
};

export default ButtonKey;

import { React } from 'react';

const buttonActionKey = (context) => {
	const { data: rows, config, actions } = context;
	const style = {
		width: `${ config.button.width }vMin`,
		height: `${ config.button.width }vMin`,
	};

	return (
		<button
			key={ rows.value }
			style={ style }
			onClick={ () => {
				actions.updateNumbers(rows.value);
				// actions.updateActionKeys(rows.operation);
				// actions.updateActionResult(rows.operation);
			} }
		>{ rows.value }</button>
	);
};

export default buttonActionKey;

import { React } from 'react';

const ButtonNumber = (context) => {
	const { data: number, config, actions } = context;
	const style = {
		width: `${ config.button.width }vMin`,
		height: `${ config.button.width }vMin`,
	};

	return (
		<button
			key={ number.value }
			style={ style }
			onClick={ () => {
				actions.setNumber(number.label);
				// actions.updateResult(number.label);
			} }
		>{ number.label }</button>
	);
};

export default ButtonNumber;

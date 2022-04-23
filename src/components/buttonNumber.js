import { React } from 'react';

const ButtonNumber = (context) => {
	const { data: number, config } = context;
	const style = {
		width: `${ config.button.width }vMin`,
		height: `${ config.button.width }vMin`,
	};

	return (
		<button
			key={ number.value }
			style={ style }
			onClick={ () => context.actions.display(number.value) }
		>{ number.label }</button>
	);
};

export default ButtonNumber;

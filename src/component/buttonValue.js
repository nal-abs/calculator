import { React } from 'react';

const ButtonValue = (context) => {
	const { data: rows, config } = context;
	const style = {
		width: `${ config.button.width }vMin`,
		height: `${ config.button.width }vMin`,
	};

	return (
		<button
			key={ rows.value }
			style={ style }
			onClick={ () => context.actions.display(rows.value) }
		>{ rows.value }</button>
	);
};

export default ButtonValue;

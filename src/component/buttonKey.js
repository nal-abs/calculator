import { React } from 'react';

const ButtonKey = (context) => {
	const { data: rows, config } = context;
	const style = {
		width: `${ config.button.width }vMin`,
		height: `${ config.button.width }vMin`,
	};

	return (
		<button
			key={ rows.label }
			style={ style }
		>{ rows.label }</button>
	);
};

export default ButtonKey;

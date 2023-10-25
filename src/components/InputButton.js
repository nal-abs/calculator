import { React } from 'react';

const InputButton = (context) => {
	const { data: { category, action }, actions } = context;
	const { width, position, size, value } = category;

	return (
		<button
			key={ value }
			style={ {
				backgroundPosition: position,
				width: width,
				backgroundSize: size,
			} }
			className="sprite buttonSize"
			onClick={ () =>	actions[action](category) }
		/>
	);
};

export default InputButton;

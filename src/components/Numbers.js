import { React } from 'react';

const Numbers = (context) => {
	const { data: number, actions } = context;

	return (
		<button
			key={ number.value }
			style={ { backgroundPosition: number.position,
				width: number.width, backgroundSize: number.size } }
			className="sprite buttonSize"
			onClick={ () =>	actions.setNumber(number) }
		/>
	);
};

export default Numbers;

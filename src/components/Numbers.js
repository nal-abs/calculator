import { React } from 'react';

const Numbers = (context) => {
	const { data: number, actions } = context;

	return (
		<button
			key={ number.value }
			style={ { backgroundPosition: number.position } }
			className="sprite buttonSize"
			onClick={ () =>	actions.setNumber(number) }
		/>
	);
};

export default Numbers;

import { React } from 'react';

const Numbers = (context) => {
	const { data: number, actions } = context;
	const style = {
		backgroundPosition: '-39px -24px',
	};

	return (
		<button
			key={ number.value }
			style={ style }
			className="sprite number"
			onClick={ () =>	actions.setNumber(number) }
		>{number.label}</button>
	);
};

export default Numbers;

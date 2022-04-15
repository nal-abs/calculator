import { React } from 'react';

const SingleButton = (context, i) => {
	const { data: Key } = context;

	return (
		<button
			key={ i }
			onClick={ () => context.actions.display(Key) }
		>{ Key }</button>
	);
};

export default SingleButton;

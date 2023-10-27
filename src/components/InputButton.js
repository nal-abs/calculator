/* eslint-disable max-lines-per-function */
import { peek } from '@laufire/utils/debug';
import { React } from 'react';
import MediaPlayer from 'react-web-components/MediaPlayer';

const constantValue = {
	type: 'audio',
	mode: 'normal',
	loop: false,
	controls: false,
	volume: 0.5,
	muted: false,
	pip: false,
	played: 0,
	loaded: 0,
	duration: 0,
	playbackRate: 1.0,

};
const playAudio = (context) => {
	const { state, setState, data: { category }} = context;
	const { audioStatus } = state;

	peek(category, 'category');

	return setState((prev) => ({
		...prev,
		audioStatus: {
			...audioStatus,
			number: category.value && 'playing',
			operator: category.operation && 'playing',
		},
	}

	));
};

const InputButton = (context) => {
	const {
		data: { category, action, audios: { numberAudio, operationAudio }},
		actions, state, setState,
	} = context;
	const { width, position, size, value: number } = category;
	const { audioStatus } = state;
	const onChange = (event) => {
		event.target.value.status === 'ended' && setState((prev) => ({
			...prev,
			audioStatus: {
				...audioStatus,
				number: category.value && 'ready',
				operator: !category.value && 'ready',
			},
		}));
	};

	const dynamicValue = {
		url: category.value ? numberAudio : operationAudio,
		status: category.value ? audioStatus.number : audioStatus.operator,
	};

	const value = { ...dynamicValue, ...constantValue };

	return (
		<button
			key={ number }
			style={ {
				backgroundPosition: position,
				width: width,
				backgroundSize: size,
			} }
			className="sprite buttonSize"
			onClick={ () => {
				actions[action](category);
				playAudio(context);
			} }
		>
			<MediaPlayer { ...{ value, onChange } }/>
		</button>

	);
};

export default InputButton;

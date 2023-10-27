/* eslint-disable max-lines-per-function */
import { React } from 'react';
import MediaPlayer from 'react-web-components/MediaPlayer';
import audios from '../services/audios';

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
	const { state, setState, data: { category: { audio }}} = context;
	const { audioStatus } = state;

	return setState((prev) => ({
		...prev,
		audioStatus: {
			...audioStatus,
			[audio]: 'playing',

		},
	}

	));
};

const InputButton = (context) => {
	const {
		data: { category, action },
		actions, state, setState,
	} = context;
	const { width, position, size, value: number, audio } = category;
	const { audioStatus } = state;
	const onChange = (event) => {
		event.target.value.status === 'ended' && setState((prev) => ({
			...prev,
			audioStatus: {
				...audioStatus,
				[audio]: 'ready',

			},
		}));
	};

	const dynamicValue = {
		url: audios[audio],
		status: audioStatus[audio],
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

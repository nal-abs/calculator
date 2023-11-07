/* eslint-disable max-lines-per-function */
import { React } from 'react';
import MediaPlayer from 'react-web-components/MediaPlayer';
import audios from '../services/audios';
import { peek } from '@laufire/utils/debug';

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

const InputButton = (context) => {
	const {
		data: { category, action },
		actions, state, setState,
	} = context;
	const { width, position, size, audio } = category;
	const { audioStatus } = state;

	const onChange = (event) => {
		event.target.value.status === 'ended' && setState((prev) => ({
			...prev,
			audioStatus: {
				...audioStatus,
				[audio]: 'ready',
			},
		}));
		peek(audioStatus);
	};

	const dynamicValue = {
		url: audios[audio],
		status: audioStatus[audio],
	};

	const value = { ...dynamicValue, ...constantValue };

	return (
		<div
			style={ {
				backgroundPosition: position,
				width: width,
				backgroundSize: size,
			} }
			className="sprite buttonSize"
			onClick={ () => {
				actions[action](category);
				actions.playAudio(audio);
			} }
		>
			<MediaPlayer { ...{ value, onChange } }/>
		</div>

	);
};

export default InputButton;

import { React } from 'react';
import PositionService from '../services/PositionService';
import { map } from '@laufire/utils/collection';
import InputButton from './InputButton';
import numberAudio from '../assets/numberBtn.mp3';
import operationAudio from '../assets/operationBtn.mp3';

const Rows = (context) => {
	const { config: { buttons }} = context;
	const style = { width: `${ PositionService.buttonPosition(context) }vMin` };
	const audios = { numberAudio, operationAudio };

	return (
		<div style={ style }>
			{ map(buttons, ({ categories, action }) =>
				map(categories, (category, i) =>
					<InputButton
						key={ i }
						{ ...{
							...context,
							data: { category, action, audios },
						} }
					/>)) }
		</div>
	);
};

export default Rows;

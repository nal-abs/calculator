import { React } from 'react';
import ButtonKey from './buttonKey';
import ButtonValue from './buttonValue';
import PositionService from '../services/PositionService';

const ButtonRows = (context) => {
	const { config } = context;

	const style = {
		width: `${ PositionService.buttonPosition(context) }vMin`,
	};

	return (
		<div style={ style }>
			{ config.numbers.map((rows, i) =>
				ButtonValue({ ...context, data: rows }, i)) }
			{ config.operators.map((rows, i) =>
				ButtonKey({ ...context, data: rows }, i)) }
		</div>
	);
};

export default ButtonRows;

import { React } from 'react';
import ButtonValue from './buttonValue';
import ButtonActionKey from './buttonActionKey';
import PositionService from '../services/PositionService';
import ButtonOperators from './buttonOperator';

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
				ButtonOperators({ ...context, data: rows }, i)) }
			{ config.ActionKeys.map((rows, i) =>
				ButtonActionKey({ ...context, data: rows }, i)) }
		</div>
	);
};

export default ButtonRows;

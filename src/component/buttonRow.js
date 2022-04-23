import { React } from 'react';
import ButtonNumber from './buttonNumber';
import PositionService from '../services/PositionService';
import ButtonOperator from './buttonOperator';

const ButtonRow = (context) => {
	const { config } = context;

	const style = {
		width: `${ PositionService.buttonPosition(context) }vMin`,
	};

	return (
		<div style={ style }>
			{ config.numbers.map((number, i) =>
				ButtonNumber({ ...context, data: number }, i)) }
			{ config.operators.map((operator, i) =>
				ButtonOperator({ ...context, data: operator }, i)) }
		</div>
	);
};

export default ButtonRow;

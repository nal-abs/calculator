import { React } from 'react';
import Numbers from './Numbers';
import PositionService from '../services/PositionService';
import Operators from './Operators';

const Rows = (context) => {
	const { config } = context;
	const style = {
		width: `${ PositionService.buttonPosition(context) }vMin`,
	};

	return (
		<div style={ style }>
			{ config.numbers.map((number, i) =>
				Numbers({ ...context, data: number }, i)) }
			{ config.operators.map((operator, i) =>
				Operators({ ...context, data: operator }, i)) }
		</div>
	);
};

export default Rows;

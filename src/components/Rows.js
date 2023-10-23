import { React } from 'react';
import Numbers from './Numbers';
import PositionService from '../services/PositionService';
import Operators from './Operators';
import { map } from '@laufire/utils/collection';

const Rows = (context) => {
	const { config: { numbers, operators }} = context;
	const style = {
		width: `${ PositionService.buttonPosition(context) }vMin`,
	};

	return (
		<div style={ style }>
			{ map(numbers, (number, i) =>
				<Numbers key={ i } { ...{ ...context, data: number } }/>) }
			{ map(operators, (operator, i) =>
				<Operators key={ i } { ...{ ...context, data: operator } }/>) }
		</div>
	);
};

export default Rows;

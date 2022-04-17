import { React } from 'react';
import PositionService from '../services/PositionService';

const outputDisplay = (context) => {
	const { state: { result }} = context;
	const style = {
		width: `${ PositionService.buttonPosition(context) }vMin`,
	};

	return (
		<div style={ style }className="textBox">
			{ result } </div>
	);
};

export default outputDisplay;

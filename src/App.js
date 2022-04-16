/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import ButtonRows from './component/buttonRows';
import PositionService from './services/PositionService';

const App = (context) => {
	const { state } = context;

	const style = {
		width: `${ PositionService.buttonPosition(context) }vMin`,
	};

	console.log(state);
	return (
		<div className="App" role="App">
			<div style={ style }className="textBox">
				{ state.number} </div>
			<div>{ ButtonRows(context) }</div>
		</div>
	);
};

export default App;

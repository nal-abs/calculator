/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import RowsButton from './component/ButtonRows';

const App = (context) => {
	const { state } = context;

	console.log(state);
	return (
		<div className="App" role="App">
			<div style={ { display: 'flex',
				border: '5px Solid black',
				position: 'absolute',
				height: '3%',
				width: '10%',
				fontWeight: 'bold',
				align: 'center' } }
			>
				Output: { state.number} </div>
			<div>{ RowsButton(context) }</div>
		</div>
	);
};

export default App;

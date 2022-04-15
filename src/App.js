/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import ButtonRows from './component/ButtonRows';

const App = (context) => {
	const { state } = context;

	console.log(state);
	return (
		<div className="App" role="App">
			<div className="textBox">
				Output: { state.number} </div>
			<div>{ ButtonRows(context) }</div>
		</div>
	);
};

export default App;
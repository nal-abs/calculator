/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import ButtonRow from './components/buttonRow';
import outputDisplay from './components/outputDisplay';

const App = (context) => {
	const { state } = context;

	console.log(state);
	return (
		<div className="App" role="App">
			<div>{ outputDisplay(context) }</div>
			<div>{ ButtonRow(context) }</div>
		</div>
	);
};

export default App;

/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import ButtonRows from './component/buttonRows';
import outputDisplay from './component/outputDisplay';

const App = (context) => {
	const { state } = context;

	console.log(state);
	return (
		<div className="App" role="App">
			<div>{ outputDisplay(context) }</div>
			<div>{ ButtonRows(context) }</div>
		</div>
	);
};

export default App;

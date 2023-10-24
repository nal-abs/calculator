/* eslint-disable no-magic-numbers */
import { React } from 'react';
import './App.scss';
import RowButton from './components/Rows';
import OutputDisplay from './components/OutputDisplay';

const App = (context) =>
	<div className="App" role="App">
		<OutputDisplay { ...context }/>
		<RowButton { ...context }/>
	</div>;

export default App;

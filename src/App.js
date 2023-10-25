import { React } from 'react';
import './App.scss';
import Rows from './components/Rows';
import Answer from './components/Answer.js';

const App = (context) =>
	<div className="App" role="App">
		<Answer { ...context }/>
		<Rows { ...context }/>
	</div>;

export default App;

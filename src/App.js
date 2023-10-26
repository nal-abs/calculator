import { React } from 'react';
import './App.scss';
import Rows from './components/Rows';
import Answer from './components/Answer.js';
import ReactClock from './components/Clock';

const App = (context) =>
	<div className="App" role="App">
		<div>
			<Answer { ...context }/>
			<Rows { ...context }/>
		</div>
		<ReactClock/>
	</div>;

export default App;

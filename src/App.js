import { React } from 'react';
import './App.scss';
import RowButton from './components/Rows';
import OutputDisplay from './components/OutputDisplay';

const App = (context) =>
	<div className="App" role="App">
		<div><OutputDisplay { ...context }/></div>
		<div><RowButton { ...context }/></div>
	</div>;

export default App;

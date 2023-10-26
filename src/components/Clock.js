import React from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const ReactClock = () =>
	<Clock
		className="class"
		renderNumbers={ true }
		value={ new Date() }
	/>;

export default ReactClock;

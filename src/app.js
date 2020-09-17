import React, { useState } from 'react';
import './app.scss';

const App = () => {
	const [counter, setCounter] = useState(0);
	const handleClick = () => {
		setCounter(counter + 1);
	};

	return (
		<div className='App' data-testid='app-test'>
			<h1>I&apos;m configuring setting up webpack</h1>
			<p>
				The count now is:
				{counter}
			</p>
			<button type='button' onClick={handleClick}>
				Click me
			</button>
		</div>
	);
};

export default App;

import React from 'react';
import './App.css';
import ItemEntry from './components/ItemEntry';
import SignIn from './components/SignIn';

function App() {
	return (
		<div className='App'>
			<h1 style={{ margin: '0 auto' }}>African Marketplace</h1>
			<SignIn />
		</div>
	);
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemEntry from './components/ItemEntry';
import SignIn from './components/SignIn';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute';
import DisplayAllItems from './components/DisplayAllItems';
import UserItems from './components/UserItems';
import Navigation from './components/Navbar';
import AllUsers from './components/AllUsers';

function App() {
	return (
		<div className='App'>
			{/* <h1 style={{ margin: '0 auto' }}>African Marketplace</h1> */}
			<Navigation />
			<Switch>
				<Route exact path='/' component={SignIn} />
				<Route path='/registration' component={Registration} />
				<PrivateRoute path='/home' component={DisplayAllItems} />
				<PrivateRoute path='/user' component={UserItems} />
				<PrivateRoute path='/sell' component={ItemEntry} />
				<PrivateRoute path='/users' component={AllUsers} />
			</Switch>
		</div>
	);
}

export default App;

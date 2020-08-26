import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ItemEntry from "./ItemEntry";
import UserItems from "./UserItems";
import Registration from "./Registration";
import SignIn from "./SignIn";
 
class Navigation extends Component {
  render() {
    return (
      <div className='nav-header'>
        <Router>
        <p>African Marketplace</p>
       <ul id="nav">
          <li><a href="/">Login</a></li>
          <li><a href="/registration">Register</a></li>
          <li><a href="/sell">Add Item</a></li>
          <li><a href="/home">All Items</a></li>
       </ul>
       <Switch>
           <Route exact path= '/' components={SignIn}/>
           <Route exact path='/Registration' components={Registration}/>
           <Route exact path= '/sell' components={ItemEntry}/>
           <Route exact path='/home' components= {UserItems}/>
       </Switch>
       </Router>
    </div>
    );
}
}
export default Navigation;


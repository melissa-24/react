import React from 'react';
import Registration from './components/Registration';
import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Image from './africanmarketplace.png';

function App() {
  const StyledLink = styled(Link)`
  width:100px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  float: right;
  color: black;

`;
  return (
    <div className="App">
     

      <Router> 
      <div className="header-one">
      <p>African Marketplace</p>
      </div>
        <nav>
          <StyledLink to="/">Sign In</StyledLink>
          <StyledLink to="/Registration">Register</StyledLink>
        </nav>
        <div className= "image">
          <img src = {Image} alt="africanmarketplace"></img>
        </div>
        <div className="welcome">
          <p>Welcome! Please sign in to get started.</p>
        </div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

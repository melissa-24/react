import React, { Component } from "react";
 
class Navigation extends Component {
  render() {
    return (
      <div className='nav-header'>
        <p>African Market</p>
       <ul id="nav">
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Add Item</a></li>
          <li><a href="#">All Items</a></li>
          <li><a href="#">Log Out</a></li>
       </ul>
    </div>
    );
}
}
export default Navigation;


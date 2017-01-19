import React from 'react';
import { hashHistory } from 'react-router';
import {Link} from 'react-router'; 

function Dropdown () {
  return (
    <div className="dropdown">
      <h5>Menu</h5>
      <div className="dropdown-content">
        <Link to={'/about'}>About Us</Link>
        <Link to ={'/progress'}>My Progress</Link>
        <Link to ={'/welcome'}>Logout</Link>
      </div>
    </div>
  )
}

export default Dropdown;



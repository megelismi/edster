import React from 'react';
import { hashHistory } from 'react-router';
import {Link} from 'react-router'; 

function Dropdown () {
  return (
    <div className="dropdown">
      <h5>Menu</h5>
      <div className="dropdown-content">
        <Link to ={'/welcome'}>Logout</Link>
        <Link to ={'/progress'}>Progress Report</Link>
      </div>
    </div>
  )
}

export default Dropdown;



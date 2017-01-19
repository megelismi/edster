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
				<a href="/auth/logout">Logout</a>
      </div>
    </div>
  )
}

export default Dropdown;

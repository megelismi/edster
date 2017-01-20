import React from 'react'; 
import Dropdown from './dropdown';


function Header () {
	return (
		<div className="header">
			<img className="logo" src="assets/Edster-logo.png"/>
			<Dropdown />
		</div>
	)
}

export default Header; 
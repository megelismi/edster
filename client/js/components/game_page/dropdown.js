import React from 'react'; 

const Dropdown = (props) => {
	
	return (
		<select
			className="dropdown"
			selected={value} 
        	onChange={props.route}>
		</select>	
	)
}


export default Dropdown; 


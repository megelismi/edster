import React from 'react'; 
import { hashHistory } from 'react-router';
import {Link} from 'react-router';

function AboutContainer () {
	return (
		<div className="about-container">
		<div className="header">
		    <img className="logo" src="assets/edster-logo.png"/>
		    <div className="dropdown">
		         <h4>Menu</h4>
		         <div className="dropdown-content">
		            <Link to={'/quiz'}>Flashcards</Link>
		            <Link to ={'/progress'}>My Progress</Link>
		            <a href="/auth/logout">Logout</a>
		         </div>
      		</div>
      	</div>
			<h1>About Us</h1>
			<div className="about-us-container">
				<div className="indiv-bio">
					<img className="bio-pic" src="./assets/placeholder.jpg"/>
					<div className="about-dev">
						<p>Fap 8-bit vinyl photo booth cornhole keffiyeh, 
						kale chips williamsburg. Craft beer paleo occupy cardigan 
						YOLO chia narwhal. Deep v polaroid heirloom helvetica hammock. 
						Meditation meh hot chicken williamsburg prism leggings.</p>
					</div>
				</div>
				<div className="indiv-bio">
					<img className="bio-pic" src="./assets/placeholder.jpg"/>
					<div className="about-dev">
						<p>Literally artisan flannel, meggings gluten-free try-hard 
						pinterest skateboard tilde. Meditation kogi shabby chic, vape 
						lyft fingerstache enamel pin irony asymmetrical lomo green juice 
						90's succulents hammock. Vape offal thundercats cred hexagon.</p>
					</div>
				</div>
			</div>
			<h1>About Edster</h1>
				<div className="about-edster-container">
					<p>Cool stuff about Edster, frameworks, and space repetition algorithms</p>
				</div>
		</div>
	)
}

export default AboutContainer;
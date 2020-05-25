import React from 'react';
import Tilt from 'react-tilt';
import classImage from './ClassroomImage.PNG';

const Navigation = ({ onRouteChange, currentUser, isSignedIn}) => {
	return (
		<div>
			<nav className="f3 purple z-1 fixed w-100 top-0 zone">
				<ul className="flex white list ma0 justify-center main-nav">
					<li className="pa0">
						<Tilt className="br2 shadow-5" options={{ max : 55 }} style={{ height: 135, width: 140 }} >
							<div className="Tilt-inner"><img style={{padding: '0px'}} alt='logo' src={classImage}/></div>
						</Tilt>
					</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('home', {isSignedIn})}>HOME</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('myRoom', {isSignedIn})}>MY CLASSROOM</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('assignments', {isSignedIn})}>ASSIGNMENTS</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('science', {isSignedIn})}>SCIENCE NEWS</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('contacts', {isSignedIn})}>CONTACT</li>
					{
						currentUser ?
						<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('home', false)}>SIGN OUT</li>
						:
						<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('signInOrRegister', {isSignedIn})}>SIGN IN/REGISTER</li>
					}
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;
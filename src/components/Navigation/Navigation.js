import React from 'react';
import Tilt from 'react-tilt';
import classImage from './ClassroomImage.PNG';

const Navigation = ({ onRouteChange}) => {
	return (
		<div>
			<nav className="f3 purple z-1 fixed w-100 top-0 zone">
				<ul className="flex white list ma0 justify-center main-nav">
					<li className="pa0">
						<Tilt className="br2 shadow-5" options={{ max : 55 }} style={{ height: 135, width: 140 }} >
							<div className="Tilt-inner"><img style={{padding: '0px'}} alt='logo' src={classImage}/></div>
						</Tilt>
					</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('home')}>HOME</li>
					<li className="tc pointer nav-txt" type="button">MY CLASSROOM</li>
					<li className="tc pointer nav-txt" type="button">ACADEMIC</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('assignments')}>ASSIGNMENTS</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('science')}>SCIENCE NEWS</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange('contacts')}>CONTACT</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;
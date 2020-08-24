import React from 'react';
import Tilt from 'react-tilt';
import classImage from './ClassroomImage.PNG';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/FirebaseUtils';

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
					<li className="tc pointer nav-txt " type="button" onClick={() => onRouteChange()}>
						<Link to="/">HOME</Link>
					</li>
					
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange()}>
						<Link to="/myRoom">MY CLASSROOM</Link>
					</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange()}>
						<Link to="/assignments">ASSIGNMENTS</Link>
					</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange()}>
						<Link to="/science">SCIENCE NEWS</Link>
					</li>
					<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange()}>
						<Link to="/contacts">CONTACT</Link>
					</li>
					{
						currentUser ?
						<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange()}>
							<div onClick={() => auth.signOut()}>SIGN OUT</div>
						</li>
						:
						<li className="tc pointer nav-txt" type="button" onClick={() => onRouteChange()}>
							<Link to="signIn">SIGN IN/REGISTER</Link>
						</li>
					}
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;
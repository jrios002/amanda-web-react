import React from 'react';
import AmandaPhoto from './AmandaPhoto.jpg';
import AssignList from '../AssignList/AssignList';
import { Link } from 'react-router-dom';

const Profile = ({ onRouteChange, lessons }) => {
	return (
		<div>
			<div className="zone flex flex-wrap justify-center">
				<div className="box-left">
					<img className="teacher-img" alt='' src={AmandaPhoto}/>
					<div className="teacher-header">Welcome to my classroom!!</div>
					<p>Hello! My name is Amanda Rios and I am very excited to be your teacher this year!! Please click on the "Read More" link below to learn more about me and my teaching style!</p>
					<div className="f4 bg-transparent pointer bn underline" onClick={() => onRouteChange()}>
						<Link className="black pl3" to="/myRoom">Read More</Link>
					</div>
				</div>
				<div className="box-right overflow-y-auto">
					<div className="b underline tc assign-header pt4 pb3">Here are the current Assignments</div>
					<AssignList lessons={lessons} onRouteChange={onRouteChange}/>
				</div>
			</div>
		</div>
	);
}

export default Profile;
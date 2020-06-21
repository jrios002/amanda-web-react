import React from 'react';
import AmandaPhoto from './AmandaPhoto.jpg';
import AssignList from '../AssignList/AssignList';

const Profile = ({ onRouteChange, lessons, route }) => {
	return (
		<div>
			<div className="zone flex flex-wrap justify-center">
				<div className="box-left">
					<img className="teacher-img" alt='' src={AmandaPhoto}/>
					<div className="teacher-header">Welcome to my classroom!!</div>
					<p>Hello! My name is Amanda Rios and I am very excited to be your teacher this year!! Please click on the "Read More" link below to learn more about me and my teaching style!</p>
					<input className="f4 bg-transparent pointer bn underline" type="button" value="Read More" onClick={() => onRouteChange('myRoom')}></input>
				</div>
				<div className="box-right overflow-y-auto">
					<div className="b underline tc assign-header pt4 pb3">Here are the current Assignments</div>
					<AssignList lessons={lessons} route={route} onRouteChange={onRouteChange}/>
				</div>
			</div>
		</div>
	);
}

export default Profile;
import React from 'react';
import AmandaPhoto from './AmandaPhoto.jpg';

const Profile = () => {
	return (
		<div className="zone flex flex-wrap justify-center">
			<div className="box-left">
				<img className="teacher-img" alt='' src={AmandaPhoto}/>
				<div className="teacher-header">Welcome to my classroom!!</div>
				<p>Hello! My name is Amanda Rios and I am very excited to be your teacher this year!! Please click on the "Read More" link below to learn more about me and my teaching style!</p>
				<input className="bg-transparent pointer bn pl3 underline" type="button" value="Read More"></input>
			</div>
			<div className="box-right"></div>
		</div>
	);
}

export default Profile;
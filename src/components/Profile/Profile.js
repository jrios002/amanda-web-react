import React from 'react';
import AmandaPhoto from './AmandaPhoto.jpg';

const Profile = ({ onRouteChange }) => {
	return (
		<div>
			<div className="zone flex flex-wrap justify-center">
				<div className="box-left">
					<img className="teacher-img" alt='' src={AmandaPhoto}/>
					<div className="teacher-header">Welcome to my classroom!!</div>
					<p>Hello! My name is Amanda Rios and I am very excited to be your teacher this year!! Please click on the "Read More" link below to learn more about me and my teaching style!</p>
					<input className="bg-transparent pointer bn pl3 underline" type="button" value="Read More" onClick={() => onRouteChange('myRoom')}></input>
				</div>
				<div className="box-right"></div>
			</div>
			<div className="pt3 pb6">
				<form className="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
					<fieldset className="cf bn ma0 pa0">
					<legend className="pa0 f5 f4-ns mb3 black-80">Sign up to receive class updates:</legend>
					<div className="cf">
						<label className="clip" htmlFor="email-address">Email Address</label>
						<input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address" id="email-address"/>
						<input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="button" value="Subscribe"/>
					</div>
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default Profile;
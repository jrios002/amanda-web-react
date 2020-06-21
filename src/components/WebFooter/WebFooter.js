import React from 'react';
import fbicon from './FBicon.png';
import twitticon from './Twittericon.png';
import googleIcon from './GoogleIcon.png';

const WebFooter = () => {
	return (
		<footer className="f3 purple fixed">
			<section>
				<div>
					<a href="https://www.facebook.com/pages/category/Elementary-School/Paramount-Terrace-Elementary-School-278545358825640/" target="_blank" rel="noopener noreferrer">
						<img className="facebook-btn" alt="FBIcon" src={fbicon} width="20" height="auto"></img>
					</a>
					<a href="https://twitter.com/ptecougars?lang=en" target="_blank" rel="noopener noreferrer">
						<img className="twitter-btn" alt="twitterIcon" src={twitticon} width="20" height="auto"></img>
					</a>
					<a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer">
						<img className="insta-btn" alt="GoogleLogo" src={googleIcon} width="20" height="auto"></img>
					</a>
				</div>
				<div className="foot-txt">© Copyright 2018 Rios Productions</div>			
			</section>
			<div className="vertical"></div>
			<section>
				<div>
					<div className="contact-txt">Contact Me</div>
					<div className="foot-txt">Tel: 806-414-8046</div>
					<div className="foot-txt">Email: Amanda.Rios@amaisd.org</div>
				</div>
			</section>
			<div className="vertical"></div>
			<section>
				<div>
					<div className="contact-txt">Paramount Terrace Elementary</div>
					<div className="foot-txt">6501 Meister St.</div>
					<div className="foot-txt">Amarillo, TX 79119</div>
				</div>
			</section>
		</footer>
	);
}

export default WebFooter;
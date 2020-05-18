import React from 'react';
import fbicon from './FBicon.png';
import instaicon from './Instaicon.png';
import twitticon from './Twittericon.png';

const WebFooter = () => {
	return (
		<footer className="f3 purple fixed">
			<section>
				<div>
					<button className="facebook-btn"><img className="w-100 h-auto" src={fbicon} alt=''/></button>
					<button className="twitter-btn"><img src={twitticon} alt=''/></button>
					<button className="insta-btn"><img src={instaicon} alt=''/></button>
				</div>
				<div className="foot-txt">© Copyright 2018 Rios Productions</div>			
			</section>
			<div className="vertical"></div>
			<section>
				<div>
					<div className="contact-txt">Contact Me</div>
					<div className="foot-txt">Tel: 806-206-5151</div>
					<div className="foot-txt">Email: jrios4177@outlook.com</div>
				</div>
			</section>
			<div className="vertical"></div>
			<section>
				<div>
					<div className="contact-txt">Address</div>
					<div className="foot-txt">6501 Meister St.</div>
					<div className="foot-txt">Amarillo, TX 79119</div>
				</div>
			</section>
		</footer>
	);
}

export default WebFooter;
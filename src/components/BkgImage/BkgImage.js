import React from 'react';
import homeImg from './AssignmentPic.PNG';
import myRoomImg from './desks.jpg';

var bkgImage = '';

const BkgImage = () => {
	if (window.location.pathname==='/'){
		bkgImage = homeImg;
	} else if (window.location.pathname==='/myRoom'){
		bkgImage = myRoomImg;
	}

	return (
		<div className="imageMargin">
			<img className="z-1 w-100 h-auto" src={bkgImage} alt=''/>			
		</div>
	);
}

export default BkgImage;
import React from 'react';
import homeImg from './AssignmentPic.PNG';
import myRoomImg from './desks.jpg';

const BkgImage = (route) => {
	if (route==='home'){
		const bkgImage = homeImg;
	} else if (route==='myRoom'){
		const bkgImage = myRoomImg;
	}

	return (
		<div className="imageMargin">
			<img className="z-1 w-100 h-auto" src={bkgImage} alt=''/>			
		</div>
	);
}

export default BkgImage;
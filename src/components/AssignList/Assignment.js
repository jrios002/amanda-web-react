import React from 'react';

const Assignment = ({name, dueDate, route, onRouteChange, imgUrl, downloadUrl}) => {
	if (route === 'home') {
		return (
			<div>
				<input className="teacher-header listPadding bg-transparent bn white pointer" type="button" value={name + " Due Date:" + dueDate} onClick={() => onRouteChange('assignments')}></input>
			</div>
		);
	} else {
		return (
			<div className='tc bg-purple dib br3 pa3 ma2 grow bw2 shadow-5 assign-img'>
				<a href={downloadUrl} target="_blank" rel="noopener noreferrer">
					<img alt='assignImg' src={imgUrl} />
				</a>
				<div>
					<h2 className="white">{name}</h2>
					<h3 className="white">Due Date: {dueDate}</h3>
				</div>
			</div>
		);
	}
}

export default Assignment;
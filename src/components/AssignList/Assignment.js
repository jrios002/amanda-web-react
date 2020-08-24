import React from 'react';

const Assignment = ({name, dueDate, route, onRouteChange, imgUrl, downloadUrl}) => {
	if (window.location.pathname === '/') {
		return (
			<div>
				<input className="assign-header listPadding bg-transparent bn pointer" type="button" value={name + " Due Date:" + dueDate} onClick={() => onRouteChange()}></input>
			</div>
		);
	} else {
		return (
			<div className='tc bg-purple dib br3 pa3 ma2 grow bw0 shadow-5 assign-img'>
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
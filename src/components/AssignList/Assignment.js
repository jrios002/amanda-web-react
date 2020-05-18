import React from 'react';

const Assignment = ({name, id}) => {
	return (
		<div className='tc bg-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2 className="white">{name}</h2>
			</div>
		</div>
	);
}

export default Assignment;
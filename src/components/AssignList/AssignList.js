import React from 'react';
import Assignment from './Assignment';

const AssignList = ({ lessons }) => {
	return (
		<div className="mv5 mh5">
			{
				lessons.map((user, i) => {
					return (
						<Assignment
							key={lessons[i].id}
							id={lessons[i].id}
							name={lessons[i].name}
						/>
					);
				})
			}
		</div>
	);
}

export default AssignList;
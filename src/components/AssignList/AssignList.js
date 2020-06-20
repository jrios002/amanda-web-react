import React from 'react';
import Assignment from './Assignment';

const AssignList = ({ onRouteChange, lessons, route }) => {
	return (
		<div className="pb6">
			{
				lessons.map((lesson, i) => {
					if(route === 'assignments'){
						return (
							<Assignment className="mv5 mh5"
								onRouteChange={onRouteChange}
								route={route}
								key={lessons[i].id}
								id={lessons[i].id}
								name={lessons[i].name}
								date={lessons[i].date}
								dueDate={lessons[i].dueDate}
								imgUrl={lessons[i].imgUrl}
								downloadUrl={lessons[i].downloadUrl}
							/>
						);
					} else {
						return (
							<div className="pb4" key={lessons[i].id}>
								<Assignment
									onRouteChange={onRouteChange}
									route={route}
									key={lessons[i].id}
									id={lessons[i].id}
									name={lessons[i].name}
									date={lessons[i].date}
									dueDate={lessons[i].dueDate}
									imgUrl={lessons[i].imgUrl}
									downloadUrl={lessons[i].downloadUrl}
								/>
								<button className="black listPadding teacher-header pointer" onClick={() => onRouteChange('assignments')}>Read More</button>
							</div>
						);
					}
				})
			}
		</div>
	);
}

export default AssignList;
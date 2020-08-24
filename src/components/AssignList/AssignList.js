import React from 'react';
import Assignment from './Assignment';
import { Link } from 'react-router-dom';

const AssignList = ({ onRouteChange, lessons }) => {
	return (
		<div className="pb6">
			{
				lessons.map((lesson, i) => {
					if(window.location.pathname === '/assignments'){
						return (
							<Assignment className="mv5 mh5"
								onRouteChange={onRouteChange}
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
									key={lessons[i].id}
									id={lessons[i].id}
									name={lessons[i].name}
									date={lessons[i].date}
									dueDate={lessons[i].dueDate}
									imgUrl={lessons[i].imgUrl}
									downloadUrl={lessons[i].downloadUrl}
								/>
								<button className="listPadding teacher-header pointer" onClick={() => onRouteChange()}>
									<Link className="black" to="/assignments">READ MORE</Link>
								</button>
							</div>
						);
					}
				})
			}
		</div>
	);
}

export default AssignList;
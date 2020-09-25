import React from 'react';
import Assignment from './Assignment';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';

const AssignList = ({ onRouteChange, lessons }) => {
	return (
		<div className="pb6">
			{
				lessons.map((lesson, i) => {
					if(window.location.pathname === '/assignments'){
						return (
							(lessons.length === 0 || lessons === undefined)
							? <Spinner className='AssignSpinner' name="pacman" color="white" />
							: <Assignment className="mv5 mh5"
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
								{(lessons.length === 0 || lessons === undefined)
									? <Spinner className='spinner' name="pacman" color="white" />
									: <div>
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
								}
							</div>
						);
					}
				})
			}
		</div>
	);
}

export default AssignList;
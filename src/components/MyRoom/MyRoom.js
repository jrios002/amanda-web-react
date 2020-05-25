import React from 'react';
import AmandaPhoto from '../Profile/AmandaPhoto.jpg';

const MyRoom = () => {
	return (
		<div>
			<h1 className="mt3 tc white">Welcome to Mrs. Rios' Classroom</h1>
			<div className="flex justify-center items-start mt2 mb6">
				<img className="ma2 w-20 h-auto" alt='' src={AmandaPhoto}/>
				<p className="ma2 zone white w-30 fw1">Hello all, I am Mrs and welcome to my classroom. Rios. Let me tell
				 you a little about myself.  I have three children, my daughter Alyssa, son Ronnie, and son Gabriel. 
				 I grew up in Lubbock but moved to Amarillo at a young age. I graduated from Amarillo High School....
				 Go Sandies!!! I helped win the Volleyball State Championship my senior year! I have my teacher's certificate from 
				Texas Teacher's, and I obtained my Bachelor's of Science Degree from West Texas A & M University in
				 which I majored in Biochemistry and Biotechnology. I am very excited to teach you this year!! We will
				 learn Reading, Writing, and my personal favorite...Science! With a positive attitude and a willingness to learn,
				  we will all have a great year!! So let's get started!!!</p>
			</div>			
		</div>
	);
}

export default MyRoom;
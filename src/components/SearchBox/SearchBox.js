import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pt5 pb2 centerAll'>
			<input
				className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='search assignments'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;
import React from 'react'
import Search from './Search'

const Home = (props) => {
	console.log('home props', props);
	return (
		<div className='Home'>
			<h1>Welcome to Planner!</h1>
			<img src='https://blogs-images.forbes.com/robertadams/files/2016/03/the-best-travel-websites-in-the-world-1200x800.jpg?width=960'></img>
			<br />
		{/* <Search history={props.history}/> */}
			
		</div>
		
	)
}

export default Home
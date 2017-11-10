import React from 'react'
import Search from './Search'

const Home = (props) => {
	console.log('home props', props);
	return (
		<div className='Home'>
			<h1>Welcome!</h1>
			
			<br />
		{/* <Search history={props.history}/> */}
			
		</div>
		
	)
}

export default Home
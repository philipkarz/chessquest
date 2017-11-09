import React from 'react'
import Search from './Search'

const Home = (props) => {
	console.log('home props', props);
	return (
		<div className='Home'>
			<h1>Welcome to ChessQuest!</h1>
			<div>
				<img className='logo' src='http://newmail-ng.com/wp-content/uploads/2014/01/Chess-2.jpg'></img>
			</div>
			<br />
		<Search history={props.history}/>
			
		</div>
		
	)
}

export default Home
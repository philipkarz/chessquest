import React from 'react'
import Search from './views/Search'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<Link to="/">Home</Link>
			{props.currentUser
				? (
					<span>
					<br />
						<Link to="/profile">Profile</Link>
						<br />
						<Link to="/logout">Log Out</Link>
						<br />
						<Link to="/search">Search</Link>
						
					</span>
				)
				: (
					<span>
						<Link to="/login">Log In</Link>
						<br />
					
						<Link to="/signup">Sign Up</Link>
						<button>Search</button> 
						
					</span>
				)
			}
			
		</div>
	)
}

export default NavBar
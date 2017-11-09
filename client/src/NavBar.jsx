import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<Link to="/">Home</Link>
			
			{props.currentUser
				? (
					<span>

						<Link to="/profile">Profile</Link>
	
						<Link to="/logout">Log Out</Link>
	
						<Link to="/search">Search</Link>
						
					</span>
				)
				: (
					<span>
						<Link to="/login">Log In</Link>
	
					
						<Link to="/signup">Sign Up</Link>
						<button>Search</button> 
						
					</span>
				)
			}
			
		</div>
	)
}

export default NavBar
import React from 'react'
import axios from 'axios'
import Search from './Search'

// import EditProfile from './EditProfile'
import { Link } from 'react-router-dom'
// import vipImage from '../vip.jpg'

class Profile extends React.Component {

	componentDidMount() {

	}

	deleteAcct(id) {
        axios({
            method: 'delete', 
            url: `/chess/users/${id}`,
        })
        .then(res => {
            // this.props.history.push('/login')
        })
	}
	render() {
		const { user } = this.props
		console.log(user)
	return (
		
		<div className='Profile'>
			<h1>Welcome {user.name}!</h1>
			{/* <img src={vipImage} alt="VIP" /> */}
			<button onClick={this.deleteAcct.bind(this)}>Delete Account</button>
			<Link to='/editprofile'><button> Edit Info </button></Link>
			<Search />
			
		</div>
	)
	}	
}

export default Profile
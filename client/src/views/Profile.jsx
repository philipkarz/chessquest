import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import vipImage from '../vip.jpg'

class Profile extends React.Component {

	deleteAcct(id) {
        axios({
            method: 'delete', 
            url: `/chess/users/${id}`,
        })
        .then(res => {
            this.props.history.push('/login')
        })
	}
	render() {
	return (
		<div className='Profile'>
			<h1>Welcome!</h1>
			{/* <img src={vipImage} alt="VIP" /> */}
			<button>Find chess events</button>
			<button onClick={this.deleteAcct.bind(this)}>Delete Account</button>
			<Link to='/editprofile'/>
			
			
		</div>
	)
	}	
}

export default Profile
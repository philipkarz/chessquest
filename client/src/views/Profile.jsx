import React from 'react'
import axios from 'axios'


// import EditProfile from './EditProfile'
import { Link } from 'react-router-dom'
// import vipImage from '../vip.jpg'

class Profile extends React.Component {

	state = { events: [] }

	componentDidMount() {
		axios({
			method: 'get',
			url: '/chess/events'
		}).then(res => {
			console.log('response ', res)
			this.setState({ events: res.data })
		})
	}

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
		const { user } = this.props
		console.log(this.state)
	return (
		
		<div className='Profile'>
			<h1>Welcome {user.name}!</h1>
			{/* <img src={vipImage} alt="VIP" /> */}
			<button onClick={this.deleteAcct.bind(this)}>Delete Account</button>
			<Link to='/editprofile'><button> Edit Info </button></Link>
			<div>
            <h1>Your Events</h1>
            {this.state.events.map(event => {
                return (
                    <div key={event._id}>
                        <h2><Link to={`/events`} id={event._id} >{event.name}</Link></h2>
                    
                    </div>
                )
            })}
            </div>
			
		</div>
	)
	}	
}

export default Profile
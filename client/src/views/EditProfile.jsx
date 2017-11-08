import React from 'react'
import axios from 'axios'
import clientAuth from '../clientAuth'

class EditProfile extends React.Component {
	state = {
		fields: { email: '', password: '', name: ''}
	}

	componentDidMount() {
		this.setState({
			fields: {
				name: this.props.user.name,
				email: this.props.user.email,
				password: this.props.user.password
			}
		})
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
			axios({
				method: 'patch', 
				url: `/chess/users/${this.props.user._id}`,
				data: this.state.fields,
			})
			.then(res => {
				this.props.history.push(`/profile`)
				this.setState({ fields: res.data })
			})
	}
	
	render() {
		let { email, password, name } = this.state.fields
		console.log(this.state.fields)
		return (
			<div className='EditProfile'>
				<h1>Edit Info</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text"  name="name" value={name} />
					<input type="text"  name="email" value={email} />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default EditProfile
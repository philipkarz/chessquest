import React from 'react'
import clientAuth from '../clientAuth'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {

	state = {
		fields: { name: '', email: '', password: ''}
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
		clientAuth.signUp(this.state.fields).then(data => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(data.success) {
				this.props.onSignUpSuccess(data.token)
				console.log(this.props.history)
				this.props.history.push('/vip')
			}
		})
	}
	
	render() {
		console.log(this.props.history)
		const { name, email, password } = this.state.fields
		this.props.history.push('/')
		return (
			<div className='SignUp'>
				<h1>Sign Up</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="Name" name="name" value={name} />
					<input type="text" placeholder="Email" name="email" value={email} />
					<input type="password" placeholder="Password" name="password" value={password} />
					<button>Log In</button>
				</form>
			</div>
		)
	}
}

export default SignUp
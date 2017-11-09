import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import clientAuth from './clientAuth'
import EditProfile from './views/EditProfile'
import NavBar from './NavBar'
import Footer from './Footer'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import Profile from './views/Profile'
import Home from './views/Home'
import Search from './views/Search'
import EventShow from './views/EventShow'
import EditEvent from './views/EditEvent'


class App extends React.Component {
	state = { currentUser: null }

	componentDidMount() {
		this.setState({ currentUser: clientAuth.getCurrentUser() })
	}

	onLoginSuccess(user) {
		this.setState({ currentUser: clientAuth.getCurrentUser() })
	}

	logOut() {
		clientAuth.logOut()
		this.setState({ currentUser: null })
	}
	
	render() {
		const { currentUser } = this.state
		console.log(currentUser)
		return (
			<div className='App'>

				<NavBar currentUser={currentUser} />
					
				<Switch>

					<Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />

					{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
					<Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/profile" render={(props) => {
						return currentUser
							? <Profile {...props} user={this.state.currentUser} />
							: <Redirect to="/login" />
					}} />

					<Route path="/editprofile" render={(props) => {
						return currentUser
							? <EditProfile {...props} user={this.state.currentUser} />
							: <Redirect to="/profile" />	
							
					}} />

					<Route path="/search" component={Search} />

					<Route path="/events/:id/edit" component={EditEvent} />

					<Route path="/events/:id" component={EventShow} />

					

					<Route path="/" component={Home} />

					

					

				</Switch>
				<Footer />
			</div>
			
		)
		
	}
}

export default App

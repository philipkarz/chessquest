import React from 'react'
import axios from 'axios'
import clientAuth from '../clientAuth'

class EditEvent extends React.Component {
	state = {
		fields: { name: '', location: '', time: '', description: '', }
    }

	componentDidMount() {
        axios({
			method: 'get', 
			url: `/chess/events/${this.props.match.params.id}`,
		})
		.then(res => {
			const event = res.data
			this.setState({
				fields: {
					name: event.name,
					location: event.location,
					time: event.time,
					description: event.description
				}
			})
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

	editEvent(evt) {
		evt.preventDefault()
        const id = this.props.match.params.id
        console.log('edit', id)
        axios({ 
            method: 'patch',
             url: `/chess/events/${id}`,
             data: this.state.fields,
    })
    
        .then(res => {
            console.log(res.data)
            console.log('success came from patch')
            this.setState({ event: res.data })
            this.props.history.push(`/profile`)
        })
    }
	
	
	render() {
		let { name, location, time, description } = this.state.fields
		console.log(this.state.fields)
		return (
			<div className='EditEvent'>
				<h1>Edit Event</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.editEvent.bind(this)}>
                    <input type="text" placeholder="name" name='name' value={name}/>
                    <input type="text" placeholder="location" name='location' value={location}/>
                    <input type="text" placeholder="time" name='time' value={time}/>
                    <textarea type="text" placeholder="description" name='description' value={description}/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default EditEvent
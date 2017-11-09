import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' 

class EventShow extends React.Component {
   
    state = { event: null }

    componentDidMount() {
        const id = this.props.match.params.id
        axios({ method: 'get', url: `chess/events/${id}` })
        .then(res => {
            this.setState({ post: res.data })
        })
    }


    onDelete(e) {
        e.preventDefault() 
        const id = this.state.event._id
        axios({
            method: 'delete', 
            url: `/chess/events/${id}`,
        })
        .then(res => {
            this.props.history.push('/profile')
        })
    }

    render() {
        const event = this.state.event
        console.log('eventshow', this.props)

        if(!event) return <div>Loading...</div>
        
        return(
            <div>
            <h1>Single Event View</h1>
            <h2>{event.name}</h2>
            <p>{event.location}</p>
            <p>{event.time}</p>
            <p>{event.description}</p>
            <hr />
            <Link to={`events/${event._id}/edit`}>Edit</Link>
            <button onClick={this.onDelete.bind(this)}>Delete</button>
            <Link to="/profile">Back</Link>
            </div>
        )
    }
}

export default EventShow
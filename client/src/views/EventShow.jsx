import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' 

class EventShow extends React.Component {
   
    state = { event: null }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log('show', id)
        axios({ method: 'get', url: `/chess/events/${id}` })
        .then(res => {
            console.log(res.data)
            this.setState({ event: res.data })
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

        if(!event) return <div className='loading'>Loading...</div>
        
        return(
            <div>
            
            <h1>Event View</h1>
            <hr />
            <div className='event'>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Time</th>
                     <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>{event.name}</td>
                    <td>{event.location}</td>
                    <td>{event.time}</td>
                    <td>{event.description}</td>
                </tr>
                </tbody>
                </table>
            
            </div>
            <hr />
            <Link to={`/events/${event._id}/edit`}>Edit</Link>
            <button className='delete' onClick={this.onDelete.bind(this)}>Delete</button>
            <Link to="/profile">Back</Link>
            </div>
        )
    }
}

export default EventShow
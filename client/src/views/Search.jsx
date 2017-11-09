import React from 'react'
import axios from 'axios'
import clientAuth from '../clientAuth'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class Search extends React.Component {

	state = {
		fields: { name: '', location: '', time: '', description: '', }
    }

    // searchEvents(evt) {
    //     evt.preventDefault()
    //     var searchTerm =  evt.target.search_input.value
    //     var location =  evt.target.search_location.value
    //     console.log(searchTerm)
    //     axios({
    //         method: 'get', 
    //         url: `http://api.eventful.com/rest/events/search?...&keywords=${searchTerm}&location=${location}`,
    //         data: this.state.fields,
    //     })
    //     .then(res => {
    //       console.log(res.data)  
    //     })
       

    // }

      addEvent(evt) {
        evt.preventDefault()
        // console.log(this.state.fields)
        console.log('props in add event', this.props);

        axios({
            method: 'post', 
            url: '/chess/events',
            data: this.state.fields,
        })
        .then(res => {
           this.props.history.push('/profile')
        })
       

    }

    onInputChange(evt) {
		this.setState({
			fields: {
                ...this.state.fields,
                //name referencing from the input in the form
				[evt.target.name]: evt.target.value
			}
		})
	}
    
    render() {
        console.log('props in render', this.props);
        var event = this.state.event
        const { name, location, time, description } = this.state
        return(
            <div className='Event'>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.addEvent.bind(this)}>
                    <button>Create Event</button>
                    <input type="text" placeholder="name" name='name' value={name}/>
                    <input type="text" placeholder="location" name='location' value={location}/>
                    <input type="text" placeholder="time" name='time' value={time}/>
                    <textarea type="text" placeholder="description" name='description' value={description}/>
                    
                </form>
                
            </div>
            
        )
        
    }
   

}

export default Search
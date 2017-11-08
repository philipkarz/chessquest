import React from 'react'
import axios from 'axios'
import clientAuth from '../clientAuth'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class Search extends React.Component {

	state = {
		fields: { search: ''}
    }

    searchEvents(evt) {
        evt.preventDefault()
        var searchTerm =  evt.target.search_input.value
        console.log(searchTerm)
        axios({
            method: 'get', 
            url: ``,
            data: this.state.fields,
        })
        .then(res => {
            
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

        var search = this.state.search
        
        return(
            <div className='Search'>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.searchEvents.bind(this)}>
                    <button>Find Events</button>
                    <input type="text" placeholder="search events" name='search_input' value={search}/>
                </form>
            </div>
        )
    }

}

export default Search
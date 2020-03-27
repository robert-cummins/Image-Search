import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'

class App extends React.Component {
    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term}, 
            headers: {
                Authorization: 'Client-ID dXgb1yXvlV4a0E_TR_8Ehgg4yQS53I_hey7y-pEtbPY' 
            }
        })

        console.log(response.data.results)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )

    }
}

export default App;
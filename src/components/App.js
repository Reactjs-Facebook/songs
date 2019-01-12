import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'


//functional component called App
const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eigth wide">
                    <SongList />
                </div>
                <div className="column eigth wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

//Component is the base class or super class
class SongList extends Component {
    //helper method
    renderList() {
        return this.props.songs.map ((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right float">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)} >
                                Select  
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
    
    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

//(state) - this function gets called with all of the data inside the redux store
const mapStateToProps = (state) => {
    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(SongList)
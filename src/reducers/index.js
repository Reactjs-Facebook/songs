import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'no scrubs', duration: '4:05' },
        { title: 'nothing', duration: '1:10' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
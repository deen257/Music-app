import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
  activeSong: {},
  playlist: [],
  playlistSong:{},
  genreListId: '',
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song
      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks
      } else {
        state.currentSongs = action.payload.data
      }
      

      state.currentIndex = action.payload.index
      state.isActive = true
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track
      } else {
        state.activeSong = state.currentSongs[action.payload]
      }

      state.currentIndex = action.payload
      state.isActive = true
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track
      } else {
        state.activeSong = state.currentSongs[action.payload]
      }

      state.currentIndex = action.payload
      state.isActive = true
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload
    },

    addToPlaylist: (state, action) => {
      state.playlist = action.payload.song
      if (action.payload?.data?.tracks?.hits) {
        state.playlistSong = action.payload.data.tracks.hits
      } else if (action.payload?.data?.properties) {
        state.playlistSong = action.payload?.data?.tracks
      } else {
        state.playlistSong = action.payload.data
      }

      // let newPlaylist;
      // if (action.payload){
      //   console.log(state.playlist.data);
      // newPlaylist = action.payload
      // return {...state , playlist:action.payload }
      // }
      
    },
  },
})

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
  addToPlaylist,
} = playerSlice.actions

export default playerSlice.reducer

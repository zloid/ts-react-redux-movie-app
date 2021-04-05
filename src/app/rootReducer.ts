import { combineReducers } from '@reduxjs/toolkit'
import defaultLookReducer from '../features/defaultLook/defaultLookSlice'
import singleMovieDetailsReducer from '../features/singleMovieDetails/singleMovieDetailsSlice'
import movieMoreInfoReducer from '../features/movieMoreInfo/movieMoreInfoSlice'

export default combineReducers({
    defaultLookReducer,
    singleMovieDetailsReducer,
    movieMoreInfoReducer,
})

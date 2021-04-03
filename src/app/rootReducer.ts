import { combineReducers } from '@reduxjs/toolkit'
import defaultLookReducer from '../features/defaultLook/defaultLookSlice'
import singleMovieDetailsReducer from '../features/singleMovieDetails/singleMovieDetailsSlice'

export default combineReducers({
    defaultLookReducer,
    singleMovieDetailsReducer,
})

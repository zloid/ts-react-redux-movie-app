import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'
import { KEY } from '../../api/api'

const apiMovieByName: Array<{
    id: number
    poster_path: string
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}> = []

type SliceState = {
    isMoviesBySearchBoxLoading: boolean
    moviesBySearchBoxData: typeof apiMovieByName
    picStorageDefaultPath: string
}

const initialState: SliceState = {
    isMoviesBySearchBoxLoading: false,
    moviesBySearchBoxData: apiMovieByName,
    picStorageDefaultPath: 'https://image.tmdb.org/t/p/w342/',
}

const searchBoxSlice = createSlice({
    name: 'searchBox',
    initialState,
    reducers: {
        getMoviesBySearchBox(state) {
            state.isMoviesBySearchBoxLoading = true
        },
        getMoviesBySearchBoxSuccess(
            state,
            action: PayloadAction<typeof apiMovieByName>
        ) {
            state.isMoviesBySearchBoxLoading = false

            state.moviesBySearchBoxData = action.payload
        },
        getMoviesBySearchBoxFailure(state) {
            state.isMoviesBySearchBoxLoading = false
        },
    },
})

export const {
    getMoviesBySearchBox,
    getMoviesBySearchBoxSuccess,
    getMoviesBySearchBoxFailure,
} = searchBoxSlice.actions

export default searchBoxSlice.reducer

export const fetchMoviesBySearchBox = (movieName?: string): AppThunk => async (
    dispatch
) => {
    try {
        dispatch(getMoviesBySearchBox())
        // const response = await fetch(`http://localhost:8001/${movieName}`)
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${movieName}`
        )

        const listOfFilms = await response.json()

        dispatch(getMoviesBySearchBoxSuccess(listOfFilms.results))
    } catch (error) {
        dispatch(getMoviesBySearchBoxFailure())
        alert('Please reload page! ' + error)
    }
}

export const selectmoviesBySearchBoxData = (state: RootState) =>
    state.searchBoxReducer.moviesBySearchBoxData

export const selectDefaultPathToPic = (state: RootState) =>
    state.searchBoxReducer.picStorageDefaultPath

export const selectIsMoviesBySearchBoxLoading = (state: RootState) =>
    state.searchBoxReducer.isMoviesBySearchBoxLoading

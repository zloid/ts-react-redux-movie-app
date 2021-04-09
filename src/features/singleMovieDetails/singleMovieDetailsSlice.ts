import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'

export const apiMovieByGenre: Array<{
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
    idOfCurrentMovie: number
    isDefaultFilmsLoading: boolean
    defaultFilmsData: typeof apiMovieByGenre
    isTimeForRedirectToSingleMovieItem: boolean
}

const initialState: SliceState = {
    idOfCurrentMovie: 0,
    isDefaultFilmsLoading: false,
    defaultFilmsData: apiMovieByGenre,
    isTimeForRedirectToSingleMovieItem: false,
}

const singleMovieDetailsSlice = createSlice({
    name: 'singleMovieDetails',
    initialState,
    reducers: {
        getIdOfMovie(state, action: PayloadAction<number>) {
            state.idOfCurrentMovie = action.payload
        },
        getDefaultFilms(state) {
            state.isDefaultFilmsLoading = true
        },
        getDefaultFilmsSuccess(
            state,
            action: PayloadAction<typeof apiMovieByGenre>
        ) {
            state.isDefaultFilmsLoading = false

            state.defaultFilmsData = action.payload
        },
        getDefaultFilmsFailure(state) {
            state.isDefaultFilmsLoading = false
        },
        doRedirectToSingleMovieItem(state, action: PayloadAction<boolean>) {
            state.isTimeForRedirectToSingleMovieItem = action.payload
        },
    },
})

export const {
    getIdOfMovie,
    getDefaultFilms,
    getDefaultFilmsSuccess,
    getDefaultFilmsFailure,
    doRedirectToSingleMovieItem,
} = singleMovieDetailsSlice.actions

export default singleMovieDetailsSlice.reducer

export const fetchDefaultFilms = (genreId?: number): AppThunk => async (
    dispatch
) => {
    try {
        dispatch(getDefaultFilms())

        const response = await fetch(`http://localhost:8001/actions`)

        const listOfFilms = await response.json()

        dispatch(
            getDefaultFilmsSuccess(
                listOfFilms.find((ob: { id: number }) => ob.id === genreId)
            )
        )

        dispatch(doRedirectToSingleMovieItem(true))
    } catch (error) {
        dispatch(getDefaultFilmsFailure())
        alert('Please reload page! ' + error)
    }
}

export const selectTimeForRedirectToSingleMovieItem = (state: RootState) =>
    state.singleMovieDetailsReducer.isTimeForRedirectToSingleMovieItem

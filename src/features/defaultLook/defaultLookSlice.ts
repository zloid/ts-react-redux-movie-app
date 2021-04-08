import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'

const apiMovieByGenre: Array<{
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
    isDefaultFilmsLoading: boolean
    defaultFilmsData: typeof apiMovieByGenre
    picStorageDefaultPath: string
    isBurgerMenuOpen: boolean
}

const initialState: SliceState = {
    isDefaultFilmsLoading: false,
    defaultFilmsData: apiMovieByGenre,
    picStorageDefaultPath: 'https://image.tmdb.org/t/p/w342/',
    isBurgerMenuOpen: false,
}

const defaulLookSlice = createSlice({
    name: 'defaultLook',
    initialState,
    reducers: {
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
        openCloseBurgerMenu(state) {
            state.isBurgerMenuOpen = !state.isBurgerMenuOpen
        },
        closeBurgerMenu(state) {
            state.isBurgerMenuOpen = false
        },
    },
})

export const {
    getDefaultFilms,
    getDefaultFilmsSuccess,
    getDefaultFilmsFailure,
    openCloseBurgerMenu,
    closeBurgerMenu,
} = defaulLookSlice.actions

export default defaulLookSlice.reducer

export const fetchDefaultFilms = (genreId?: string): AppThunk => async (
    dispatch
) => {
    try {
        dispatch(getDefaultFilms())
        console.log(genreId)
        const response = await fetch(`http://localhost:8001/${genreId}`)

        const listOfFilms = await response.json()

        dispatch(getDefaultFilmsSuccess(listOfFilms))
    } catch (error) {
        dispatch(getDefaultFilmsFailure())
        alert('Please reload page! ' + error)
    }
}

export const selectDefaultFilmsData = (state: RootState) =>
    state.defaultLookReducer.defaultFilmsData

export const selectDefaultPathToPic = (state: RootState) =>
    state.defaultLookReducer.picStorageDefaultPath

export const selectIsBurgerMenuOpen = (state: RootState) =>
    state.defaultLookReducer.isBurgerMenuOpen

/* action 28

animated 16

documentary 99

drama 18

family 10751

fantasy 14

history 36

comedy 35

war 10752

crime 80

music 10402

mystery 9648

romance 10749

sci fi 878

horror 27

TV movie 10770

thriller 53

western 37

adventure 12 */

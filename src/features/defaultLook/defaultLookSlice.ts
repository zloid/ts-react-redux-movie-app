import { createSlice } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'

type SliceState = {
    isDefaultFilmsLoading: boolean
    defaultFilmsData: Array<{ id: number; poster_path: string }>
    picDefaultPath: string
}

const initialState: SliceState = {
    isDefaultFilmsLoading: false,
    defaultFilmsData: [],
    picDefaultPath: 'https://image.tmdb.org/t/p/w342/',
}

const defaulLookSlice = createSlice({
    name: 'defaultLook',
    initialState,
    reducers: {
        getDefaultFilms(state) {
            state.isDefaultFilmsLoading = true
        },
        getDefaultFilmsSuccess(state, action) {
            state.isDefaultFilmsLoading = false

            // state.defaultFilmsData = action.payload.poster_path
            state.defaultFilmsData = action.payload
        },
        getDefaultFilmsFailure(state) {
            state.isDefaultFilmsLoading = false
        },
    },
})

export const {
    getDefaultFilms,
    getDefaultFilmsSuccess,
    getDefaultFilmsFailure,
} = defaulLookSlice.actions

export default defaulLookSlice.reducer

export const fetchDefaultFilms = (testStr?: string): AppThunk => async (
    dispatch
) => {
    try {
        dispatch(getDefaultFilms())
        console.log(testStr)
        // const response = await fetch(`http://localhost:8001/${testStr}`)
        const response = await fetch(`http://localhost:8001/${testStr}`)

        const listOfFilms = await response.json()

        dispatch(getDefaultFilmsSuccess(listOfFilms))
    } catch (error) {
        dispatch(getDefaultFilmsFailure())
        alert('Please reload page! ' + error)
    }
}

export const selectDefaultFilmsData = (state: RootState) =>
    state.defaultFilmsData

export const selectDefaultPathToPic = (state: RootState) => state.picDefaultPath

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

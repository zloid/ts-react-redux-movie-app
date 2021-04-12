import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'
import { KEY } from '../../api/api'

const apiMovieById: {
    adult?: boolean
    backdrop_path?: string
    belongs_to_collection?: {
        id: number
        name: string
        poster_path: string
        backdrop_path: string
    }
    budget?: number
    genres?: {
        id: number
        name: string
    }[]
    homepage?: string
    id?: number
    imdb_id?: string
    original_language?: string
    original_title?: string
    overview?: string
    popularity?: number
    poster_path?: string | null
    production_companies?: {
        id: number
        logo_path: string | null
        name: string
        origin_country: string
    }[]
    production_countries?: {
        iso_3166_1: string
        name: string
    }[]
    release_date?: string
    revenue?: number
    runtime?: number
    spoken_languages?: {
        english_name: string
        iso_639_1: string
        name: string
    }[]
    status?: string
    tagline?: string
    title?: string
    video?: boolean
    vote_average?: number
    vote_count?: number
    credits?: {
        cast: {
            adult: boolean
            gender: number
            id: number
            known_for_department: string
            name: string
            original_name: string
            popularity: number
            profile_path: string
            cast_id: number
            character: string
            credit_id: string
            order: number
        }[]
        crew: {
            adult: boolean
            credit_id: string
            department: string
            gender: number
            id: number
            job: string
            known_for_department: string
            name: string
            original_name: string
            popularity: number
            profile_path: null
        }[]
    }
} = {}

type SliceState = {
    isMovieMoreInfoLoading: boolean
    movieMoreInfoData: typeof apiMovieById
    picStorageDefaultPath: string
}

const initialState: SliceState = {
    isMovieMoreInfoLoading: false,
    movieMoreInfoData: apiMovieById,
    picStorageDefaultPath: 'https://image.tmdb.org/t/p/w342',
}

const movieMoreInfoSlice = createSlice({
    name: 'movieMoreInfo',
    initialState,
    reducers: {
        getMovieMoreInfo(state) {
            state.isMovieMoreInfoLoading = true
        },
        getMovieMoreInfoSuccess(
            state,
            action: PayloadAction<typeof apiMovieById>
        ) {
            state.isMovieMoreInfoLoading = false

            state.movieMoreInfoData = action.payload
        },
        getMovieMoreInfoFailure(state) {
            state.isMovieMoreInfoLoading = false
        },
    },
})

export const {
    getMovieMoreInfo,
    getMovieMoreInfoSuccess,
    getMovieMoreInfoFailure,
} = movieMoreInfoSlice.actions

export default movieMoreInfoSlice.reducer

export const fetchMovieMoreInfo = (movieId?: string): AppThunk => async (
    dispatch
) => {
    try {
        dispatch(getMovieMoreInfo())
        // const response = await fetch(`http://localhost:8001/someMovieMoreInfo`)
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&append_to_response=credits`
        )

        const listOfFilms = await response.json()

        console.log('listOfFilms: ', listOfFilms)

        dispatch(getMovieMoreInfoSuccess(listOfFilms))

        console.log('listOfFilms.results: ', listOfFilms.results)
    } catch (error) {
        dispatch(getMovieMoreInfoFailure())
        alert('Please reload page! ' + error)
    }
}

export const selectmovieMoreInfoData = (state: RootState) =>
    state.movieMoreInfoReducer.movieMoreInfoData

export const selectDefaultPathToPic = (state: RootState) =>
    state.movieMoreInfoReducer.picStorageDefaultPath

export const selectIsMovieMoreInfoLoading = (state: RootState) =>
    state.movieMoreInfoReducer.isMovieMoreInfoLoading

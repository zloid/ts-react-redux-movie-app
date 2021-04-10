import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDefaultFilms } from '../../features/defaultLook/defaultLookSlice'
import { MovieItemsByGenre } from '../MovieItemsByGenre/MovieItemsByGenre'

export const DefaultScreen: React.FC = () => {
    useEffect(() => {
        dispatch(fetchDefaultFilms('alien'))
    }, [])

    const dispatch = useDispatch()

    return (
        <>
            <h1>Choose movie or find favorite</h1>
            <MovieItemsByGenre />
        </>
    )
}

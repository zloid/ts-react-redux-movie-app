import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDefaultFilms } from '../../features/defaultLook/defaultLookSlice'
import { MovieItemsByGenre } from '../MovieItemsByGenre/MovieItemsByGenre'
import { GENRE } from '../../api/api'

export const DefaultScreen: React.FC = () => {
    const dispatch = useDispatch()

    const randomGenre = (genre: typeof GENRE): number => {
        const allGenresAlias = Object.values(genre)
        const randomGenre =
            allGenresAlias[Math.floor(Math.random() * allGenresAlias.length)]
        return randomGenre
    }

    useEffect(() => {
        dispatch(fetchDefaultFilms(randomGenre(GENRE)))
    }, [])

    return (
        <>
            <h1>Choose movie or find favorite</h1>
            <MovieItemsByGenre />
        </>
    )
}

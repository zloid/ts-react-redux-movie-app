import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDefaultFilms } from '../../features/defaultLook/defaultLookSlice'
import { MovieItemsByGenre } from '../MovieItemsByGenre/MovieItemsByGenre'
import { useLocationPathname } from '../../utils/useLocationPathname'
import { GENRE } from '../../api/api'

export const AnimationTab: React.FC = () => {
    useEffect(() => {
        dispatch(fetchDefaultFilms(GENRE.animated))
    }, [])

    const dispatch = useDispatch()

    const preparedLocation = useLocationPathname()

    return (
        <>
            <h1>{preparedLocation}</h1>
            <MovieItemsByGenre />
        </>
    )
}

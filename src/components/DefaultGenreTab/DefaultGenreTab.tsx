import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDefaultFilms } from '../../features/defaultLook/defaultLookSlice'
import { MovieItemsByGenre } from '../MovieItemsByGenre/MovieItemsByGenre'

import { useLocationPathname } from '../../utils/useLocationPathname'

export const DefaultGenreTab: React.FC<{ genre: string }> = ({ genre }) => {
    const dispatch = useDispatch()

    dispatch(fetchDefaultFilms(genre))

    /* useEffect(() => {
        dispatch(fetchDefaultFilms(genre))
    }, []) */

    const preparedLocation = useLocationPathname()

    return (
        <>
            <h1>{preparedLocation}</h1>
            <MovieItemsByGenre />
        </>
    )
}

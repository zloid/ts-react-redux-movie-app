import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDefaultFilms } from '../../features/defaultLook/defaultLookSlice'
import { MovieItemsByGenre } from '../MovieItemsByGenre/MovieItemsByGenre'

import { useLocationPathname } from '../../utils/useLocationPathname'

export const AnimationTab: React.FC = () => {
    useEffect(() => {
        dispatch(fetchDefaultFilms('animation'))
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

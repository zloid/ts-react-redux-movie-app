import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDefaultFilms } from '../../features/defaultLook/defaultLookSlice'
import { MovieItemsByGenre } from '../MovieItemsByGenre/MovieItemsByGenre'

import { useLocationPathname } from '../../utils/useLocationPathname'

export const ActionTab: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDefaultFilms('actions'))
    }, [])

    const preparedLocation = useLocationPathname()

    return (
        <>
            <h1>{preparedLocation}</h1>
            <MovieItemsByGenre />
        </>
    )
}

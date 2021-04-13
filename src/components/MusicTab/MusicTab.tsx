import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDefaultFilms } from '../../features/defaultLook/defaultLookSlice'
import { MovieItemsByGenre } from '../MovieItemsByGenre/MovieItemsByGenre'
import { useLocationPathname } from '../../utils/useLocationPathname'
import { GENRE } from '../../api/api'

export const MusicTab: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDefaultFilms(GENRE.music))
    })

    const preparedLocation = useLocationPathname()

    return (
        <>
            <h1>{preparedLocation}</h1>
            <MovieItemsByGenre />
        </>
    )
}

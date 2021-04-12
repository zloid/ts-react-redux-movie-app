import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchDefaultFilms } from '../../features/defaultLook/defaultLookSlice'
import { MovieItemsByGenre } from '../MovieItemsByGenre/MovieItemsByGenre'
import { useLocationPathname } from '../../utils/useLocationPathname'
// import { GENRE } from '../../api/api'

export const DefaultGenreTab: React.FC<{ genre: number }> = ({ genre }) => {
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

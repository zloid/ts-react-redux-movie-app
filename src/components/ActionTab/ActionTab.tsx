import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchDefaultFilms,
    selectDefaultFilmsData,
    selectDefaultPathToPic,
} from '../../features/defaultLook/defaultLookSlice'
import { ThumbnailOfMovie } from '../ThumbnailOfMovie/ThumbnailOfMovie'

export const ActionTab: React.FC = () => {
    useEffect(() => {
        dispatch(fetchDefaultFilms('actions'))
    }, [])

    const dispatch = useDispatch()
    const defaultFilmsData = useSelector(selectDefaultFilmsData)
    const picDefaultPath = useSelector(selectDefaultPathToPic)

    const allPosters = defaultFilmsData.map((poster) => (
        <ThumbnailOfMovie
            key={poster.id}
            thumbnail={picDefaultPath + poster.poster_path}
        />
    ))

    return <>{allPosters}</>
}

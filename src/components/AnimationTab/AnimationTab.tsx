import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchDefaultFilms,
    selectDefaultFilmsData,
    selectDefaultPathToPic,
} from '../../features/defaultLook/defaultLookSlice'
import { ThumbnailOfMovie } from '../ThumbnailOfMovie/ThumbnailOfMovie'

export const AnimationTab: React.FC = () => {
    useEffect(() => {
        dispatch(fetchDefaultFilms('animation'))
    }, [])

    const dispatch = useDispatch()
    const defaultFilmsData = useSelector(selectDefaultFilmsData)
    const picStorageDefaultPath = useSelector(selectDefaultPathToPic)

    const allPosters = defaultFilmsData.map((poster) => (
        <ThumbnailOfMovie
            key={poster.id}
            thumbnail={picStorageDefaultPath + poster.poster_path}
            alt={poster.original_title}
            id={poster.id}
        />
    ))

    return <>{allPosters}</>
}

import React from 'react'
import { useSelector } from 'react-redux'
import {
    selectDefaultFilmsData,
    selectDefaultPathToPic,
} from '../../features/defaultLook/defaultLookSlice'

import {
    ThumbnailOfMovie,
    useMappedThumbnailOfMovie,
} from '../ThumbnailOfMovie/ThumbnailOfMovie'

export const MovieItemsByGenre: React.FC = () => {
    const defaultFilmsData = useSelector(selectDefaultFilmsData)
    const picStorageDefaultPath = useSelector(selectDefaultPathToPic)

    const allPosters = useMappedThumbnailOfMovie(
        defaultFilmsData,
        picStorageDefaultPath
    )
    /* defaultFilmsData.map((poster) => (
        <ThumbnailOfMovie
            key={poster.id}
            thumbnail={picStorageDefaultPath + poster.poster_path}
            alt={poster.original_title}
            id={poster.id}
            overview={poster.overview}
            vote_average={poster.vote_average}
        />
    )) */
    return <>{allPosters}</>
}

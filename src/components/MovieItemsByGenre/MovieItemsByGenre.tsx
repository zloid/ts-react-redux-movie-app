import React from 'react'
import { useSelector } from 'react-redux'
import {
    selectDefaultFilmsData,
    selectDefaultPathToPic,
} from '../../features/defaultLook/defaultLookSlice'

import { useMappedThumbnailOfMovie } from '../ThumbnailOfMovie/ThumbnailOfMovie'

export const MovieItemsByGenre: React.FC = () => {
    const defaultFilmsData = useSelector(selectDefaultFilmsData)
    const picStorageDefaultPath = useSelector(selectDefaultPathToPic)

    const allPosters = useMappedThumbnailOfMovie(
        defaultFilmsData,
        picStorageDefaultPath
    )

    return <>{allPosters}</>
}

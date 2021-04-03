import React from 'react'
import { Image } from 'react-bootstrap'
import {
    getIdOfMovie,
    fetchDefaultFilms,
    selectTimeForRedirectToSingleMovieItem,
} from '../../features/singleMovieDetails/singleMovieDetailsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const ThumbnailOfMovie: React.FC<{
    thumbnail: string
    alt: string
    id: number
}> = ({ thumbnail, alt, id }) => {
    const dispatch = useDispatch()
    const timeForRedirectToSingleMovieItem = useSelector(
        selectTimeForRedirectToSingleMovieItem
    )

    return (
        <>
            {timeForRedirectToSingleMovieItem && <Redirect to="/info" />}
            {/* {<Redirect  to="/info" />} */}
            <Image
                thumbnail
                src={thumbnail}
                alt={alt}
                width="150"
                onClick={() => {
                    dispatch(getIdOfMovie(id))
                    dispatch(fetchDefaultFilms(id))
                }}
            />
        </>
    )
}

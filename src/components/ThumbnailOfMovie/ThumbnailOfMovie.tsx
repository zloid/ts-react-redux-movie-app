import React from 'react'
import { Image, Button, Badge } from 'react-bootstrap'
import {
    getIdOfMovie,
    fetchDefaultFilms,
    // selectTimeForRedirectToSingleMovieItem,
} from '../../features/singleMovieDetails/singleMovieDetailsSlice'
import { useDispatch } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import { MoreInfo, Info } from './style'

export const ThumbnailOfMovie: React.FC<{
    thumbnail: string
    alt: string
    id: number
}> = ({ thumbnail, alt, id }) => {
    const dispatch = useDispatch()
    // const timeForRedirectToSingleMovieItem = useSelector(
    // selectTimeForRedirectToSingleMovieItem
    // )

    return (
        <span>
            <a href={`movie-more-info?id:${id}`}>
                <Image thumbnail src={thumbnail} alt={alt} width="150" />

                <MoreInfo>
                    {/* <a href={`movie-more-info?id:${id}`}> */}
                    <Button size="sm" variant="success">
                        more info
                    </Button>
                </MoreInfo>
            </a>

            <Info>
                <Badge
                    variant="warning"
                    onClick={() => {
                        dispatch(getIdOfMovie(id))
                        dispatch(fetchDefaultFilms(id))
                    }}
                >
                    info
                </Badge>
            </Info>
        </span>
    )
}

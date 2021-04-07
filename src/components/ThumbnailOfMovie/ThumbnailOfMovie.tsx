import React from 'react'
import { Image, Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import {
    getIdOfMovie,
    fetchDefaultFilms,
} from '../../features/singleMovieDetails/singleMovieDetailsSlice'
import { useDispatch } from 'react-redux'
import { MoreInfo, Info } from './style'

export const ThumbnailOfMovie: React.FC<{
    thumbnail: string
    alt: string
    id: number
}> = ({ thumbnail, alt, id }) => {
    const dispatch = useDispatch()

    return (
        <span>
            <a href={`movie-more-info?id:${id}`}>
                <Image
                    thumbnail
                    src={
                        /null/gi.test(thumbnail)
                            ? 'https://topmeaning.com/english/images/img/EN/m/missing.jpg'
                            : thumbnail
                    }
                    alt={alt}
                    width="150"
                />

                <MoreInfo>
                    <Button size="sm" variant="success">
                        more info
                    </Button>
                </MoreInfo>
            </a>

            <Info>
                <OverlayTrigger
                    placement="auto"
                    overlay={
                        <Tooltip
                            id="tooltip-disabled"
                            style={{ backgroundColor: 'tomato' }}
                        >
                            <Badge variant="secondary">title </Badge> {alt}
                            <br />
                        </Tooltip>
                    }
                >
                    <Badge
                        variant="warning"
                        onClick={() => {
                            dispatch(getIdOfMovie(id))
                            dispatch(fetchDefaultFilms(id))
                        }}
                    >
                        info
                    </Badge>
                </OverlayTrigger>
            </Info>
        </span>
    )
}

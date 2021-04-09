import React from 'react'
import { Image, Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import {
    getIdOfMovie,
    fetchDefaultFilms,
} from '../../features/singleMovieDetails/singleMovieDetailsSlice'
import { useDispatch } from 'react-redux'
import { MoreInfo, Info } from './style'

type PropsOfThumbnail = {
    thumbnail: string
    alt: string
    id: number
    overview: string
    vote_average: number
}

export const ThumbnailOfMovie: React.FC<PropsOfThumbnail> = ({
    thumbnail,
    alt,
    id,
    overview,
    vote_average,
}) => {
    const dispatch = useDispatch()

    return (
        <span>
            <a href={`movie-more-info?id:${id}`}>
                <Image
                    src={
                        /null/gi.test(thumbnail)
                            ? 'https://topmeaning.com/english/images/img/EN/m/missing.jpg'
                            : thumbnail
                    }
                    alt={alt}
                    width="150"
                    thumbnail={true}
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
                            <Badge variant="success">title </Badge> {alt}
                            <br />
                            <Badge variant="warning">rating </Badge>{' '}
                            {vote_average}
                            <br />
                            <br />
                            <Badge variant="primary">overview </Badge>{' '}
                            {overview}
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

export const useMappedThumbnailOfMovie = (
    movieItem: {
        id: number
        poster_path: string
        original_title: string
        overview: string
        vote_average: number
    }[],
    defaultPicPath: string
) => {
    const allPosters = movieItem.map((poster) => (
        <ThumbnailOfMovie
            key={poster.id}
            thumbnail={defaultPicPath + poster.poster_path}
            alt={poster.original_title}
            id={poster.id}
            overview={poster.overview}
            vote_average={poster.vote_average}
        />
    ))
    return allPosters
}

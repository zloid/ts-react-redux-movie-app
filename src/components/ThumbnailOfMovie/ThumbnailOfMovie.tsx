import React from 'react'
import { Image, Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
//todo?
// import {
//     getIdOfMovie,
//     fetchDefaultFilms,
// } from '../../features/singleMovieDetails/singleMovieDetailsSlice'
// import { useDispatch } from 'react-redux'
import {
    MoreInfo,
    Info,
    InfoMobile,
    InfoNotMobile,
    TooltipBadgeWrapper,
} from './style'
import imgMissing from '../../assets/missing.jpg'

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
    // const dispatch = useDispatch()

    return (
        <span>
            <a href={`movie-more-info?id:${id}`}>
                <Image
                    src={/null/gi.test(thumbnail) ? imgMissing : thumbnail}
                    alt={alt}
                    width="160"
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
                            <TooltipBadgeWrapper>
                                <Badge variant="success">title </Badge> {alt}
                            </TooltipBadgeWrapper>
                            <TooltipBadgeWrapper>
                                <Badge variant="warning">rating </Badge>{' '}
                                {vote_average !== 0 ? vote_average : 'unknown'}
                            </TooltipBadgeWrapper>
                            <TooltipBadgeWrapper>
                                <Badge variant="primary">overview </Badge>{' '}
                                {overview}
                            </TooltipBadgeWrapper>
                        </Tooltip>
                    }
                >
                    <span>
                        <InfoNotMobile>
                            <Badge
                                variant="warning"
                                //todo?
                                // onClick={() => {
                                //     dispatch(getIdOfMovie(id))
                                //     dispatch(fetchDefaultFilms(id))
                                // }}
                            >
                                info
                            </Badge>
                        </InfoNotMobile>
                        <InfoMobile>
                            <div style={{ paddingTop: '4px' }}></div>
                            <Button size="sm" variant="warning">
                                <strong>info</strong>
                            </Button>
                        </InfoMobile>
                    </span>
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

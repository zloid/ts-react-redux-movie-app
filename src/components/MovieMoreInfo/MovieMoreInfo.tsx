import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// import imgMissing from '../../assets/missing.jpg'
import noImage from '../../assets/no-image-available.jpg'

import {
    fetchMovieMoreInfo,
    selectDefaultPathToPic,
    selectmovieMoreInfoData,
} from '../../features/movieMoreInfo/movieMoreInfoSlice'

export const MovieMoreInfo: React.FC = () => {
    const dispatch = useDispatch()
    const movieMoreInfoData = useSelector(selectmovieMoreInfoData)
    const defaultPathToPic = useSelector(selectDefaultPathToPic)

    const location = useLocation()
    const locationSearch = location.search.split(':')[1]

    useEffect(() => {
        dispatch(fetchMovieMoreInfo(locationSearch))
    }, [])

    return (
        <>
            <h1>More info about "{movieMoreInfoData.original_title}"</h1>
            <br />

            <Row>
                <Col>
                    <img
                        className="img-fluid"
                        src={
                            movieMoreInfoData.poster_path === null ||
                            movieMoreInfoData.poster_path === undefined
                                ? noImage
                                : defaultPathToPic +
                                  movieMoreInfoData.poster_path
                        }
                        alt={`poster pic of ${movieMoreInfoData.original_title}`}
                        style={{ borderRadius: '5px' }}
                    />
                </Col>
                <Col>
                    <Row>
                        {' '}
                        <Col>
                            <Row>
                                <Col>
                                    <strong>ID:</strong> {locationSearch}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <strong>Budget:</strong>{' '}
                                    {movieMoreInfoData.budget === 0
                                        ? 'unknown'
                                        : `${movieMoreInfoData.budget} $`}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <strong>Original language:</strong>{' '}
                                    {movieMoreInfoData.original_language}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {movieMoreInfoData.release_date !== '' ? (
                                        <span>
                                            <strong>Release date: </strong>
                                            {movieMoreInfoData.release_date}
                                        </span>
                                    ) : (
                                        ''
                                    )}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {movieMoreInfoData.backdrop_path === null ||
                    movieMoreInfoData.backdrop_path === undefined ? (
                        ''
                    ) : (
                        <Row>
                            <Col>
                                <br />
                                <img
                                    className="img-fluid"
                                    src={
                                        movieMoreInfoData.backdrop_path ===
                                            null ||
                                        movieMoreInfoData.backdrop_path ===
                                            undefined
                                            ? noImage
                                            : defaultPathToPic +
                                              movieMoreInfoData.backdrop_path
                                    }
                                    alt={`backdrop pic of ${movieMoreInfoData.original_title}`}
                                    style={{ borderRadius: '10px' }}
                                />
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    {movieMoreInfoData.overview === '' ||
                        movieMoreInfoData.overview}
                </Col>
            </Row>
            <hr />

            <Row>
                <Col>
                    <h2>Cast</h2>
                </Col>
            </Row>
        </>
    )
}

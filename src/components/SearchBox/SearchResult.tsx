import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { SpinnerWrap } from './style'

import {
    // ThumbnailOfMovie,
    useMappedThumbnailOfMovie,
} from '../ThumbnailOfMovie/ThumbnailOfMovie'

import {
    fetchMoviesBySearchBox,
    selectDefaultPathToPic,
    selectmoviesBySearchBoxData,
    selectIsMoviesBySearchBoxLoading,
} from '../../features/searchBox/searchBoxSlice'

export const SearchBox: React.FC = () => {
    const dispatch = useDispatch()
    const moviesBySearchBoxData = useSelector(selectmoviesBySearchBoxData)
    const defaultPathToPic = useSelector(selectDefaultPathToPic)
    const isMoviesBySearchBoxLoading = useSelector(
        selectIsMoviesBySearchBoxLoading
    )

    const location = useLocation()
    const locationSearch = location.search.split(':')[1]

    useEffect(() => {
        dispatch(fetchMoviesBySearchBox(locationSearch))
    }, [])

    /* const allPosters = moviesBySearchBoxData.map((poster) => (
        <ThumbnailOfMovie
            key={poster.id}
            thumbnail={defaultPathToPic + poster.poster_path}
            alt={poster.original_title}
            id={poster.id}
            overview={poster.overview}
            vote_average={poster.vote_average}
        />
    )) */

    const allPosters = useMappedThumbnailOfMovie(
        moviesBySearchBoxData,
        defaultPathToPic
    )

    return (
        <>
            <h1>Search results</h1>
            <SpinnerWrap>
                {isMoviesBySearchBoxLoading ? (
                    <Spinner animation="border" />
                ) : null}
            </SpinnerWrap>

            {allPosters}
        </>
    )
}

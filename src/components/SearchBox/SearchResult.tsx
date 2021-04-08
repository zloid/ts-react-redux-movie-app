import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThumbnailOfMovie } from '../ThumbnailOfMovie/ThumbnailOfMovie'

import {
    fetchMoviesBySearchBox,
    selectDefaultPathToPic,
    selectmoviesBySearchBoxData,
} from '../../features/searchBox/searchBoxSlice'

export const SearchBox: React.FC = () => {
    const dispatch = useDispatch()
    const moviesBySearchBoxData = useSelector(selectmoviesBySearchBoxData)
    const defaultPathToPic = useSelector(selectDefaultPathToPic)

    const location = useLocation()
    const locationSearch = location.search.split(':')[1]

    useEffect(() => {
        dispatch(fetchMoviesBySearchBox(locationSearch))
    }, [])

    const allPosters = moviesBySearchBoxData.map((poster) => (
        <ThumbnailOfMovie
            key={poster.id}
            thumbnail={defaultPathToPic + poster.poster_path}
            alt={poster.original_title}
            id={poster.id}
            overview={poster.overview}
            vote_average={poster.vote_average}
        />
    ))

    return (
        <>
            <h1>Search results</h1>

            {allPosters}
        </>
    )
}

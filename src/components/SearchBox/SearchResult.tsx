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

    console.log('SearBox: ', location)

    // const path = location.pathname
    // const store = window.localStorage

    // if (locationSearch !== undefined && locationSearch !== null) {
    // }

    useEffect(() => {
        dispatch(fetchMoviesBySearchBox(locationSearch))
    }, [])

    // dispatch(fetchMoviesBySearchBox(locationSearch))

    const allPosters = moviesBySearchBoxData.map((poster) => (
        <ThumbnailOfMovie
            key={poster.id}
            thumbnail={defaultPathToPic + poster.poster_path}
            alt={poster.original_title}
            id={poster.id}
        />
    ))

    return (
        <>
            <p>
                <u>Search results:</u>
            </p>

            {allPosters}
        </>
    )
}

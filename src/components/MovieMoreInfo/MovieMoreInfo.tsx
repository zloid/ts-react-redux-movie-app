import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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
            {location.search.split(':')[1]}

            <br />
            <img src={defaultPathToPic + movieMoreInfoData.backdrop_path} />
            <img src={defaultPathToPic + movieMoreInfoData.poster_path} />
        </>
    )
}

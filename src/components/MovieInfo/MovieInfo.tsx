import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { doRedirectToSingleMovieItem } from '../../features/singleMovieDetails/singleMovieDetailsSlice'

export const MovieInfo: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(doRedirectToSingleMovieItem(false))
    }, [])
    return <>movie_info</>
}

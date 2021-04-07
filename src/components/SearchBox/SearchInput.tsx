import React, { useState, useEffect } from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchMoviesBySearchBox } from '../../features/searchBox/searchBoxSlice'

export const SearchInput: React.FC = () => {
    const [stateSearchInput, setStateSearchInput] = useState('')

    const location = useLocation()
    const history = useHistory()

    const dispatch = useDispatch()

    const regExpInfo = /movie-more-info/gi
    const regExpRequest = /request/gi

    let locationSearch: string

    // if (regExpInfo.test(location.search)) {
    //     locationSearch = location.search.split(':')[1]
    // }
    locationSearch = location.search.split(':')[1]

    useEffect(() => {
        /* 
        locationSearch !== undefined && locationSearch !== null
            ? setStateSearchInput(locationSearch)
            : setStateSearchInput('')
             */
        if (regExpInfo.test(location.search)) {
            setStateSearchInput('')
        }
        if (regExpRequest.test(location.search)) {
            setStateSearchInput(locationSearch)
        }
    }, [])

    stateSearchInput.trim() !== '' &&
        dispatch(fetchMoviesBySearchBox(locationSearch))

    function handleKeyPress(keyPress: string) {
        if (keyPress === 'Enter') {
            // dispatch(fetchMoviesBySearchBox(locationSearch))

            history.push(
                stateSearchInput.trim()
                    ? `/search?request:${stateSearchInput}`
                    : '#no-results'
            )

            // console.log(location)

            // history.replace(`search`)

            // locationSearch !== undefined &&
            //     locationSearch !== null &&
            // dispatch(fetchMoviesBySearchBox(locationSearch))
            // dispatch(fetchMoviesBySearchBox(locationSearch))
        }
    }

    // if (stateSearchInput === 'da') return <Link to="/"></Link>

    return (
        <div>
            <input
                type="text"
                value={stateSearchInput}
                onChange={(e) => setStateSearchInput(e.target.value)}
                placeholder="Search f.e. Mask"
                onKeyPress={(e) => {
                    handleKeyPress(e.key)
                }}
            />
            {/* <a
                href={
                    stateSearchInput.trim()
                        ? `search?request:${stateSearchInput}`
                        : '#no-results'
                }
            > */}
            <button onClick={() => handleKeyPress('Enter')}>search</button>
            {/* </a> */}
        </div>
    )
}

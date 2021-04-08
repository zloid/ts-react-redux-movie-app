import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchMoviesBySearchBox } from '../../features/searchBox/searchBoxSlice'
import { closeBurgerMenu } from '../../features/defaultLook/defaultLookSlice'

import { StyledSearch } from './style'

export const SearchInput: React.FC = () => {
    const [stateSearchInput, setStateSearchInput] = useState('')

    const location = useLocation()
    const history = useHistory()

    const dispatch = useDispatch()

    const regExpInfo = /movie-more-info/gi
    const regExpRequest = /request/gi

    let locationSearch: string

    locationSearch = location.search.split(':')[1]
    if (/%20/g.test(locationSearch)) {
        locationSearch = locationSearch.replace(/%20/g, ' ')
    }

    useEffect(() => {
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
            history.push(
                stateSearchInput.trim()
                    ? `/search?request:${stateSearchInput}`
                    : '#no-results'
            )
            dispatch(closeBurgerMenu())
        }
    }

    return (
        <div>
            <StyledSearch
                type="text"
                value={stateSearchInput}
                onChange={(e) => setStateSearchInput(e.target.value)}
                placeholder="Search f.e. Mask"
                onKeyPress={(e) => {
                    handleKeyPress(e.key)
                }}
            />

            <Button variant="primary" onClick={() => handleKeyPress('Enter')}>
                search
            </Button>
        </div>
    )
}

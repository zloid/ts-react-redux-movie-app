import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const SearchInput: React.FC = () => {
    const [stateSearchInput, setStateSearchInput] = useState('')

    const location = useLocation()
    const locationSearch = location.search.split(':')[1]

    useEffect(() => {
        setStateSearchInput(locationSearch)
    }, [])

    return (
        <div>
            <input
                type="text"
                value={stateSearchInput}
                onChange={(e) => setStateSearchInput(e.target.value)}
            />
            {/* <a href={stateSearchInput ==! '' ? `search?request:${stateSearchInput.trim()}` : '#'}> */}
            <a
                href={
                    stateSearchInput.trim()
                        ? `search?request:${stateSearchInput}`
                        : '#no-results'
                }
            >
                <button>search</button>
            </a>
        </div>
    )
}

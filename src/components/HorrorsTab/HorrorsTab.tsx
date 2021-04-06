import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchDefaultFilms,
    selectDefaultFilmsData,
} from '../../features/defaultLook/defaultLookSlice'
import { MainSection } from './style'

export const animationTab: React.FC = () => {
    useEffect(() => {
        dispatch(fetchDefaultFilms('terminator'))
    }, [])

    const dispatch = useDispatch()
    const defaultFilmsData = useSelector(selectDefaultFilmsData)

    // const pic = 'https://image.tmdb.org/t/p/w342/' + defaultFilmsData
    const picStorageDefaultPath = 'https://image.tmdb.org/t/p/w342/'
    const mappedData = defaultFilmsData.map(
        (e) => picStorageDefaultPath + e.poster_path
    )

    const allPosters = mappedData.map((e, i) => (
        <img key={i} src={e} width="150" />
    ))

    return (
        <>
            <MainSection>
                {/* <MainSectionDiv>{pic}</MainSectionDiv> */}
                {/* <button onClick={() => dispatch(fetchDefaultFilms('results'))} >show</button> */}
                {allPosters}
            </MainSection>
        </>
    )
}

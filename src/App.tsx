import React from 'react'
import { Container } from 'react-bootstrap'
import { MainNavbar } from './components/MainNavbar/MainNavbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { DefaultScreen } from './components/DefaultScreen/DefaultScreen'
import { ActionTab } from './components/ActionTab/ActionTab'
import { AnimationTab } from './components/AnimationTab/AnimationTab'
import { WesternTab } from './components/WesternTab/WesternTab'
import { HorrorTab } from './components/HorrorTab/HorrorTab'
import { SciFiTab } from './components/SciFiTab/SciFiTab'
import { CrimeTab } from './components/CrimeTab/CrimeTab'
import { MusicTab } from './components/MusicTab/MusicTab'
import { HistoryTab } from './components/HistoryTab/HistoryTab'
import { MovieInfo } from './components/MovieInfo/MovieInfo'
import { MovieMoreInfo } from './components/MovieMoreInfo/MovieMoreInfo'
import { SearchBox } from './components/SearchBox/SearchResult'
import { SearchInput } from './components/SearchBox/SearchInput'

import { useSelector } from 'react-redux'

import { selectTimeForRedirectToSingleMovieItem } from './features/singleMovieDetails/singleMovieDetailsSlice'

import { HidingSearchOnMobile } from './style'

const App: React.FC = () => {
    const timeForRedirectToSingleMovieItem = useSelector(
        selectTimeForRedirectToSingleMovieItem
    )
    return (
        <Container>
            <Router>
                {timeForRedirectToSingleMovieItem && (
                    <Redirect push={true} to="/info" />
                )}
                <MainNavbar />
                <HidingSearchOnMobile>
                    <SearchInput />
                </HidingSearchOnMobile>
                <Switch>
                    <Route exact path="/" component={DefaultScreen} />
                    <Route path="/actions" component={ActionTab} />
                    <Route path="/western" component={WesternTab} />
                    <Route path="/horror" component={HorrorTab} />
                    <Route path="/sci-fi" component={SciFiTab} />
                    <Route path="/crime" component={CrimeTab} />
                    <Route path="/animation" component={AnimationTab} />
                    <Route path="/music" component={MusicTab} />
                    <Route path="/history" component={HistoryTab} />
                    <Route path="/info" component={MovieInfo} />
                    <Route path="/movie-more-info" component={MovieMoreInfo} />
                    <Route path="/search" component={SearchBox} />
                </Switch>
            </Router>
        </Container>
    )
}

export default App

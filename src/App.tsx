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
import { MovieInfo } from './components/MovieInfo/MovieInfo'
import { MovieMoreInfo } from './components/MovieMoreInfo/MovieMoreInfo'
import { SearchBox } from './components/SearchBox/SearchResult'
import { SearchInput } from './components/SearchBox/SearchInput'

import { useSelector } from 'react-redux'

import { selectTimeForRedirectToSingleMovieItem } from './features/singleMovieDetails/singleMovieDetailsSlice'

import { HidingSearchOnMobile } from './style'
import { DefaultGenreTab } from './components/DefaultGenreTab/DefaultGenreTab'

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
                    <Route path="/animation" component={AnimationTab} />
                    <Route path="/info" component={MovieInfo} />
                    <Route path="/movie-more-info" component={MovieMoreInfo} />
                    <Route path="/search" component={SearchBox} />
                    <Route path="/test">
                        <DefaultGenreTab genre="actions" />
                    </Route>
                    <Route path="/test-2">
                        <DefaultGenreTab genre="alien" />
                    </Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default App

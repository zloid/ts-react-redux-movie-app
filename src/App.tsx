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

import { useDispatch, useSelector } from 'react-redux'

import {
    getIdOfMovie,
    fetchDefaultFilms,
    selectTimeForRedirectToSingleMovieItem,
} from './features/singleMovieDetails/singleMovieDetailsSlice'

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
                <Switch>
                    <Route exact path="/" component={DefaultScreen} />
                    <Route path="/actions" component={ActionTab} />
                    <Route path="/animation" component={AnimationTab} />
                    <Route path="/info" component={MovieInfo} />
                    <Route path="/movie-more-info" component={MovieMoreInfo} />
                </Switch>
            </Router>
        </Container>
    )
}

export default App

import React from 'react'
import { Container } from 'react-bootstrap'

import { MainNavbar } from './components/MainNavbar/MainNavbar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DefaultScreen } from './components/DefaultScreen/DefaultScreen'
import { ActionTab } from './components/ActionTab/ActionTab'
import { AnimationTab } from './components/AnimationTab/AnimationTab'
import { MovieInfo } from './components/MovieInfo/MovieInfo'

const App: React.FC = () => {
    return (
        <Container>
            <Router>
                <MainNavbar />
                <Switch>
                    <Route exact path="/" component={DefaultScreen} />
                    <Route path="/actions" component={ActionTab} />
                    <Route path="/animation" component={AnimationTab} />
                    <Route path="/info" component={MovieInfo} />
                </Switch>
            </Router>
        </Container>
    )
}

export default App

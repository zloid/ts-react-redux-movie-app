import React from 'react'
import { Container } from 'react-bootstrap'

import { MainNavbar } from './components/MainNavbar/MainNavbar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DefaultScreen } from './components/DefaultScreen/DefaultScreen'
import { ActionTab } from './components/ActionTab/ActionTab'
import { AnimationTab } from './components/AnimationTab/AnimationTab'

const App: React.FC = () => {
    return (
        <Container>
            <Router>
                <MainNavbar />
                <Switch>
                    <Route exact path="/">
                        <DefaultScreen />
                    </Route>
                    <Route path="/actions">
                        <ActionTab />
                    </Route>
                    <Route path="/animation">
                        <AnimationTab />
                    </Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default App

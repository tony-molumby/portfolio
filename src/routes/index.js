import React, { Fragment } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from '../components/Navigation'
import Home from './Home'

export default () => (
    <BrowserRouter>
        <Fragment>
            <Navigation />
            <Switch>
                <Route path="/" render={props => <Home {...props} />} />
            </Switch>
        </Fragment>
    </BrowserRouter>
)
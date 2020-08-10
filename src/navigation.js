import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/home'
import SharePet from './pages/sharePet'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/sharePet" component={SharePet} />
            </Switch>
        </BrowserRouter>

    )
}

export default Navigation
import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Posts from './pages/posts'
import Pets from './pages/pets'
import Register from './pages/register'
import Login from './pages/login'
import Profile from './pages/profile'
import SharePet from './pages/sharePet'
import SharePost from './pages/sharePost'
import Error from './pages/error'
import UserContext from './Context'
import Home from './pages/home'

const Navigation = () => {
    // const context = useContext(UserContext)
    // const loggedIn = context.user.loggedIn

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pets" component={Pets} />
                <Route path="/posts" component={Posts} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/profile/:userid" component={Profile} />
                <Route path="/sharePet" component={SharePet}>
                    {/* {loggedIn ? (<SharePet />) : (<Redirect to="/" />)} */}
                </Route>
                <Route path="/sharePost" component={SharePost}>
                    {/* {loggedIn ? (<SharePost />) : (<Redirect to="/" />)} */}
                </Route>
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation
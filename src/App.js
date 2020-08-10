import React, { Component } from 'react';
import UserContext from './Context';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false,
            user: null
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }

    logout = () => {
        // document.cookie

        this.setState({
            loggedIn: false,
            user: null
        })
    }

    render() {
        const { loggedIn, user } = this.state

        return (
            <UserContext.Provider value={{
                loggedIn,
                user,
                login: this.logIn,
                logout: this.logout
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default App
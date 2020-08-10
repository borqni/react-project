import React, { Component } from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import Submit from '../../components/submit-button'
import Container from "../../components/container";
import Input from "../../components/input";
import authenticate from "../../utils/authenticate";
import UserContext from "../../Context";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    static contextType = UserContext

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    onSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state

        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password
        }, (user) => {
            this.context.login(user)
            this.props.history.push('/')
        }, (e) => {
            console.log('Error', e);
        }
        )
    }

    render() {
        const { username, password } = this.state

        return (
            <Container>
                <section className={styles.login}>
                    <Title title="Вход" />
                    <form onSubmit={this.onSubmit}>
                        <fieldset>
                            <legend>Login</legend>
                            <Input
                                // type="text"
                                value={username}
                                onChange={(event) => this.onChange(event, 'username')}
                                label="Username"
                                id="username" />
                            <Input
                                type="password"
                                value={password}
                                onChange={(event) => this.onChange(event, 'password')}
                                label="Password"
                                id="password" />
                            <Submit title="Влез" />
                            {/* <input class="button" type="submit" class="submit" value="Login" /> */}
                        </fieldset>
                    </form>
                </section>
            </Container>
        )
    }
}

export default Login
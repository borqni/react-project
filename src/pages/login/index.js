import React, { Component } from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import Submit from '../../components/submit-button'
import Container from "../../components/container";
import Input from "../../components/input";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
    }

    render() {
        const { email, password } = this.state

        return (
            <Container>
                <section className={styles.login}>
                    <Title title="Вход" />
                    <form action="#" method="post">
                        <fieldset>
                            <legend>Login</legend>
                            <Input
                                type="text"
                                value={email}
                                onChange={(event) => this.onChange(event, 'email')}
                                label="Email"
                                id="email" />
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
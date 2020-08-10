import React, { Component } from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import Submit from '../../components/submit-button'
import Container from "../../components/container";
import Input from "../../components/input";

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            rePassword: ''
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
    }

    render() {
        const { email, password, rePassword } = this.state

        return (
            <Container>
                <section className={styles.register}>
                    <Title title="Регистрация" />
                    <form action="#" method="post">
                        <fieldset>
                            <legend>Register</legend>
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
                            <Input
                                type="password"
                                value={rePassword}
                                onChange={(event) => this.onChange(event, 'rePassword')}
                                label="Re-Password"
                                id="re-password" />
                            <Submit title="Регистриране" />
                        </fieldset>
                    </form>
                </section>
            </Container>
        )
    }
}

export default Register
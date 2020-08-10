import React, { Component } from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import Submit from '../../components/submit-button'
import Container from "../../components/container";
import Input from "../../components/input";
import authenticate from "../../utils/authenticate";
import UserContext from "../../Context";

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: ""
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
        const { username, password, rePassword } = this.state

        await authenticate('http://localhost:9999/api/user/register', {
            username,
            password,
            rePassword
        }, (user) => {
            this.context.login(user)
            this.props.history.push('/')
        }, (e) => {
            console.log('Error', e);
        }
        )
    }

    render() {
        const { username, password, rePassword } = this.state

        return (
            <Container>
                <section className={styles.register}>
                    <Title title="Регистрация" />
                    {/* <form action="#" method="post"> */}
                    <fieldset>
                        <legend>Register</legend>
                        <Input
                            type="text"
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
                        <Input
                            type="password"
                            value={rePassword}
                            onChange={(event) => this.onChange(event, 'rePassword')}
                            label="Re-Password"
                            id="re-password" />
                        <Submit title="Регистриране" />
                    </fieldset>
                    {/* </form> */}
                </section>
            </Container>
        )
    }
}

export default Register
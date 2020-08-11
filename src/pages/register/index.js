import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import styles from './index.module.css'
import Title from '../../components/title'
import Submit from '../../components/submit-button'
import Container from "../../components/container";
import Input from "../../components/input";
import authenticate from "../../utils/authenticate";
import UserContext from "../../Context";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

    const onSubmit = async (event) => {
        event.preventDefault()

        await authenticate('http://localhost:9999/api/user/register', {
            username,
            password,
            rePassword
        }, (user) => {
            context.logIn(user)
            history.push('/')
        }, (e) => {
            console.log('Error', e)
        }
        )
    }

    return (
        <Container>
            <section className={styles.register}>
                <Title title="Регистрация" />
                <form onSubmit={onSubmit}>
                    <fieldset>
                        <legend>Register</legend>
                        <Input
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            label="Username"
                            id="username" />
                        <Input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            label="Password"
                            id="password" />
                        <Input
                            type="password"
                            value={rePassword}
                            onChange={(event) => setRePassword(event.target.value)}
                            label="Re-Password"
                            id="re-password" />
                        <Submit title="Регистриране" />
                    </fieldset>
                </form>
            </section>
        </Container>
    )
}

export default Register
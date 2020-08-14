import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import Title from '../../components/title'
import Submit from '../../components/submit-button'
import styles from './index.module.css'
import Container from "../../components/container";
import Input from "../../components/input";
import authenticate from "../../utils/authenticate";
import UserContext from "../../Context";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password
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
            {/* <section > */}
            <form className={styles.login} onSubmit={handleSubmit}>
                <Title title="Вход" />
                <fieldset>
                    <legend>Login</legend>
                    <Input
                        // type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        label="Username"
                        id="username" />
                    <Input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        label="Password"
                        id="password" />
                    <Submit title="Влез" />
                    {/* <input class="button" type="submit" class="submit" value="Login" /> */}
                </fieldset>
            </form>
            {/* </section> */}
        </Container>
    )
}

export default Login
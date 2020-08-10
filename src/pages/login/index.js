import React from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import Submit from '../../components/submit-button'

const Login = () => {
    return (
        <section className={styles.login}>
            <Title title="Вход" />
            <form action="#" method="post">
                <fieldset>
                    <legend>Login</legend>
                    <p class="field">
                        <label for="username">Username</label>
                        <span class="input">
                            <input type="text" name="username" id="username" placeholder="Username" />
                            <span class="actions"></span>
                            <i class="fas fa-user"></i>
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span class="actions"></span>
                            <i class="fas fa-key"></i>
                        </span>
                    </p>
                    <Submit title="Влез" />
                    {/* <input class="button" type="submit" class="submit" value="Login" /> */}
                </fieldset>
            </form>
        </section>
    )
}

export default Login
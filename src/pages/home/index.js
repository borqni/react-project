import React from 'react'
import Container from '../../components/container'
import Nav from '../../components/navigation'
import styles from './index.module.css'

const Home = () => {

    return (
        <Container>
            <div className={styles.home}>
                <h1>За да добавите</h1>
                <h5>домашния си любимец
                    {/* <Nav href="/sharePet" title="Добави" /> */}
                </h5>
                <h5>или статия
                    {/* <Nav href="/sharePost" title="Добави" /> */}
                </h5>
                <h5>трябва да се регистрирате
                    <a className={styles.btn} href="/register">Тук</a>
                </h5>
                <h5>или да влезете в профила си
                    <a className={styles.btn} href="/login">Тук</a>
                </h5>
            </div>
        </Container>
    )
}

export default Home
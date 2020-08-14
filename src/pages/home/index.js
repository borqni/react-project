import React from 'react'
import Container from '../../components/container'
import Button from '../../components/button'
import styles from './index.module.css'

const Home = () => {

    return (
        <Container>
            <div className={styles.home}>
                <h1>За да добавите</h1>
                <h5>домашния си любимец
                    {/* <Button href="/sharePet" title="Добави" /> */}
                </h5>
                <h5>или статия
                    {/* <Button href="/sharePost" title="Добави" /> */}
                </h5>
                <h5>трябва да се регистрирате
                    <Button href="/register" title="Тук" />
                </h5>
                <h5>или да влезете в профила си
                    <Button href="/login" title="Тук" />
                </h5>
            </div>
        </Container>
    )
}

export default Home
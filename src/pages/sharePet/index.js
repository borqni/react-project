import React from 'react'
import styles from './index.module.css'
// import Posts from './components/posts'
import Title from '../../components/title'
import Container from '../../components/container'
import Submit from '../../components/submit-button'

const SharePet = () => {
    return (
        <Container>
            <Title title="Добавете домашния си любимец" />
            <div className={styles.container}>
                <div>
                    <textarea>Post</textarea>
                </div>
                <div>
                    <Submit title="Post" />
                </div>
            </div>
        </Container>
    )
}

export default SharePet;
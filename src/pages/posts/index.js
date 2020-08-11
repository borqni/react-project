import React from 'react'
import Container from '../../components/container'
import styles from './index.module.css'
import Post from '../../components/post'
import Title from '../../components/title'

const Posts = () => {

    return (
        <Container>
            <Title title="Статии" />
            <Post />
        </Container >
    )
}

export default Posts
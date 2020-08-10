import React, { Component } from 'react'
import Container from '../../components/container'
import styles from './index.module.css'
import Post from '../../components/post'
import Title from '../../components/title'

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    getPosts = async () => {
        const promise = await fetch('http://localhost:3000/')
        const posts = await promise.json()

        this.setState({
            posts
        })
    }

    renderPosts() {
        const { posts } = this.state

        return posts.map(post => {
            return (
                <Post key={post._id} {...post} />
            )
        })
    }

    componentDidMount() {
        this.getPosts()
    }

    render() {
        return (
            <Container>

                <Title title="Статии" />
                <div className={styles.container}>
                    {/* {this.renderPоsts()} */}
                </div>

            </Container >
        )
    }
}

export default Posts
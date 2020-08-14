import React, { useState } from 'react'
// import styles from './index.module.css'
import Container from '../../components/container'
import Title from '../../components/title'
import Posts from '../../components/posts'
import Submit from '../../components/submit-button'
import getCookie from '../../utils/cookie'

const SharePost = () => {
    const [post, setPost] = useState('')
    const [updatedPost, setUpdatedPost] = useState([])

    const onSubmit = async () => {
        await fetch('http://localhost:9999/api/origami', {
            method: 'POST',
            body: JSON.stringify({
                description: post
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })

        setPost('')
        setUpdatedPost([...updatedPost, 1])
    }

    return (
        <Container>
            <Title title="Добавете статия" />
            <span>
                <textarea value={post} onChange={e => setPost(e.target.value)} />
            </span>
            <span>
                <Submit title="Post" onClick={onSubmit} />
            </span>

            <Posts updatedPost={updatedPost} />
        </Container>
    )
}

export default SharePost
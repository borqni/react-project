import React, { useState, useCallback, useEffect } from 'react'
// import styles from './index.module.css'
import Post from '../post'
import getPost from '../../utils/post'


const Posts = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = useCallback(async () => {
        const posts = await getPost(props)
        setPosts(posts)
    }, [props])

    const renderPosts = () => {
        return posts.map((post, index) => {
            return (
                <Post key={post._id} index={index} {...post} />
            )
        })
    }

    useEffect(() => {
        getPosts()
    }, [props.updatedPost, getPosts])

    return (
        <div >
            {renderPosts()}
        </div>
    )
}

export default Posts
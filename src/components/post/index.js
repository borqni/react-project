import React from 'react'
import styles from './index.module.css'

const Post = ({ description, image, title, author }) => {

    return (
        <div>
            {/* <h1>Posts</h1> */}
            <span className={styles.post}>
                <h5 className={styles.title}>{title}</h5>
                <img className={styles.image} src={image} />
                <textarea>{description}</textarea>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
        </div>
    )
}

export default Post
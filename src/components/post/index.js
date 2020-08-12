import React from 'react'
import styles from './index.module.css'

const Post = ({ description, image, title, author }) => {

    return (
        <div>
            {/* <h1>Posts</h1> */}
            <span className={styles.post}>
                <h5 className={styles.title}>Откритие! Китайски работник намери пет яйца от динозавър</h5>
                {/* <img className={styles.image} src="https://i.pik.bg/news/650/660_dec7d92ef99704d6780098e6abf6125d.jpg" /> */}
                <textarea>Китайски работник намери в една от южните провинции на страната пет яйца от динозавър, собщава руското електронно издание  МК, позовавайки се на китайския сайт „Чжунго синвенван“.</textarea>
                <p className={styles.author}>Автор: Pesho{author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
            <span className={styles.post}>
                <h5 className={styles.title}>title</h5>
                {/* <img className={styles.image} src={image} /> */}
                <textarea>description</textarea>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
            <span className={styles.post}>
                <h5 className={styles.title}>title</h5>
                {/* <img className={styles.image} src={image} /> */}
                <textarea>description</textarea>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
            <span className={styles.post}>
                <h5 className={styles.title}>title</h5>
                {/* <img className={styles.image} src={image} /> */}
                <textarea>description</textarea>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
            <span className={styles.post}>
                <h5 className={styles.title}>title</h5>
                {/* <img className={styles.image} src={image} /> */}
                <textarea>description</textarea>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
            <span className={styles.post}>
                <h5 className={styles.title}>title</h5>
                {/* <img className={styles.image} src={image} /> */}
                <textarea>description</textarea>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
        </div>
    )
}

export default Post
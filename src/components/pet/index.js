import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const Pet = ({ name, categorie, image, author }) => {
    return (
        <span className={styles.pet}>
            <h5 className={styles.title}>Име: {name}</h5>
            <p className={styles.categorie}>Вид: {categorie}</p>
            <img className={styles.image} alt="pets image" src={image} />
            <p className={styles.author}>Това животно е на {author.username}</p>
            {/* <div className="petInfo"> */}
            {/* <button className={styles.button}> Like </button> */}
            {/* <a href="#"><button className={styles.button}>Details</button></a> */}
            {/* <span> 2</span> */}
            {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            {/* <a href="#"><button className={styles.button}><i className="fas fa-heart"></i> Коментар </button></a> */}
            {/* </div> */}
        </span>
    )
}

export default Pet
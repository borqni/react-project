import React from 'react'
// import styles from './index.module.css'

const Pet = ({ name, categorie, image }) => {
    return (
        <span>
            <h5>Име: {name}</h5>
            <p>Вид: {categorie}</p>
            <p className="image"> {image}</p>
            {/* <p className="description">Това животно е на {uer}</p> */}
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
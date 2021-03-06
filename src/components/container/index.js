import React from 'react'
import styles from './index.module.css'
import Header from '../header'
import Footer from '../footer'

const Container = (props) => {
    return (
        <div className={styles.app} >
            <Header />

            <div className={styles.container}>
                {props.children}
            </div>

            <Footer />
        </div>
    )
}

export default Container;